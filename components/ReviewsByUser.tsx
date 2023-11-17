import { fetchReviewsByUser } from '@/actions/review.action'
import React from 'react'
import Review from './Review'

const ReviewsByUser = async (userId: string) => {
	const reviewsData = await fetchReviewsByUser(userId)
	
  return (
    <div className="flex flex-col gap-2">
			{
				reviewsData.map((review) => {
					return (
						<Review key={review.id} id={review.id} paperTitle={review.paperTitle} contents={review.contents} reviewerName={review.reviewerName} />
					)
				})
			}
		</div>
  )
}

export default ReviewsByUser