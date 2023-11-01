import { getAllReviews } from '@/actions/review.action'
import React from 'react'
import Review from './Review'

const Reviews = async () => {
	const reviewsData = await getAllReviews()
  return (
    <div>
			{
				reviewsData.map((review) => {
					return (
						<Review id={review.id} paperTitle={review.paperTitle} contents={review.contents} />
					)
				})
			}
		</div>
  )
}

export default Reviews