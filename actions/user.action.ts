"use server"

import { userType } from "@/constants";
import db from "@/lib/firebase/store";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { unstable_noStore } from "next/cache";

export async function fetchUser(userId: string) {
  try {
    const userData = await getDoc(doc(db, `users/${userId}`))
    if (userData.exists()) {
      return userData.data()
    } else {
      throw new Error("Failed to fetch user.")
    }
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch user.")
  }
}

export async function setUser(userData: userType) {
  try {
    await setDoc(doc(db, `reviews/${userData.id}`), userData)
  } catch (error) {
    throw new Error("Failed to set user.")
  }
}