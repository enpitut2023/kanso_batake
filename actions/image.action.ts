import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseError } from "firebase/app";
import { storage } from "@/lib/firebase/storage";

export async function uploadImage(file: File, reviewId: string): Promise<string> {
  try {
      const storageRef = ref(storage, `Review/${reviewId + "." + file.name.split(".").pop()}`)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      return url
  }
  catch(error) {
      if (error instanceof FirebaseError) {
          throw FirebaseError;
      }
      throw Error("Failed to upload file. Unknown error occurred")
  }
}