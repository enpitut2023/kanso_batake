"use server";

import { userType } from "@/constants";
import db from "@/lib/firebase/store";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function fetchUser(userId: string) {
  try {
    const userData = await getDoc(doc(db, `users/${userId}`));
    if (userData.exists()) {
      return userData.data() as userType;
    } else {
      throw new Error("Failed to fetch user.");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user.");
  }
}

export async function setUser(userData: userType) {
  try {
    await Promise.all([
      setDoc(doc(db, `users/${userData.id}`), userData),
      setDoc(doc(db, `labs/${userData.affiliation}`), {
        users: arrayUnion(userData.id),
      }),
    ]);
  } catch (error) {
    throw new Error("Failed to set user.");
  }
}
