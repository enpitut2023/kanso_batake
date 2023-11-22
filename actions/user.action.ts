"use server"

import db from "@/lib/firebase/store";
import { doc, getDoc } from "firebase/firestore";

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
