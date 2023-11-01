import firebaseApp from "@/libs/firebase/config"
import { collection, getDocs, setDoc, doc, query } from "firebase/firestore"
import db from "@/libs/firebase/store"

type review = {
    id: string
    paperTitle: string
    contents: string
}

export async function getAllReviews() {
    const col = query(collection(db, "reviews"))

    let result: review[] = []
    const allReviewsSnapshot = await getDocs(col)
    allReviewsSnapshot.forEach((doc) => {
        result.push(doc.data() as review)
    })

    return result
}

export async function setReview(reviewData: review) {
    await setDoc(doc(db, `reviews/${reviewData.id}`), reviewData)
}