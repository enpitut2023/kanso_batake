import { fetchReviewsByFilter } from '@/actions/review.action'
import React from 'react'
import Review from './Review'

const ReviewsByUser = async ({ userId, tag } : { userId: string, tag?:string }) => {
	const reviewsData = await fetchReviewsByFilter(tag, userId)
	
	if(reviewsData.length == 0){
		return <div>No Reviews.</div>
	}
	
  return (
    <>
    {
        tag ? (
            <div className="flex gap-1 m-1 text-muted-foreground">
                Searching in : <p>{tag}</p>
            </div>
        ) : null
    }
    <div className="flex flex-col gap-2">
        {
            reviewsData.map((review) => {
                return (
                    <Review key={review.id} reviewData={review} />
                )
            })
        }
	</div>
    </>
  )
}

export default ReviewsByUser