import { getAllReviews, fetchReviewsByUser } from '@/actions/review.action'
import React from 'react'
import Review from './Review'

const Reviews = async ({
    searchParams,}: {
  searchParams?: {
    tag?: string;
  };
}
) => {
    const tag = searchParams?.tag || '';
    console.log(tag);
    const reviewsData = tag == '' ? await getAllReviews() : await
    fetchReviewsByUser(tag); 
	
  return (
    <div className="flex flex-col gap-2">
			{
				reviewsData.map((review) => {
					return (
						<Review key={review.id} reviewData={review}/>
					)
				})
			}
		</div>
  )
}

export default Reviews