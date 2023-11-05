import firebaseApp from "@/lib/firebase/config"
import { collection, getDocs, setDoc, doc, query } from "firebase/firestore"
import db from "@/lib/firebase/store"
import { reviewData, reviewType } from "@/constants"

export async function getAllReviews() {
    return reviewData

    const col = query(collection(db, "reviews"))

    let result: reviewType[] = []
    const allReviewsSnapshot = await getDocs(col)
    allReviewsSnapshot.forEach((doc) => {
        result.push(doc.data() as reviewType)
    })

    return result
}

export async function setReview(reviewData: reviewType) {
    await setDoc(doc(db, `reviews/${reviewData.id}`), reviewData)
}