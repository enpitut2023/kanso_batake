"use server"

import { userType } from "@/constants";
import db from "@/lib/firebase/store";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function fetchUser(userId: string){
  try {
    const userData = await getDoc(doc(db, `users/${userId}`))
    if (userData.exists()) {
      return userData.data() as userType
    } else {
      throw new Error("Failed to fetch user.")
    }
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch user.")
  }
}

export async function fetchUserIdsByLabId(labId: string) {
    try {
        const labData = await getDoc(doc(db, `labs/${labId}`))
        if (labData.exists()) {
          return labData.data().users as string[];  
        } else {
            throw new Error("LabData does not exist.");
        }
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch reviews.")
    }
}

export async function fetchUsers(userIds: string[]) {
    const promises = userIds.map((userId) => fetchUser(userId))
    const users = await Promise.all(promises);
    return users;
}

export async function setUser(userData: userType) {
  try {
    await setDoc(doc(db, `users/${userData.id}`), userData)
  } catch (error) {
    throw new Error("Failed to set user.")
  }
}