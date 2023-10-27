import { reviewData } from "@/constants"

export default async function Home(
    { params } : { params: { paperId: string } }
) {
  return (
    <div>
        {
          reviewData.map((review) => {
            if(params.paperId != review.paperId) return null
            return (
              <ul>
                <li>contents: {review.contents}</li>
              </ul>
            )
          })
        }
    </div>
  )
}