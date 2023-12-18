import { fetchReviewsByUserIds } from "@/actions/review.action";
import React from "react";
import Review from "./Review";
import { fetchUserIdsByLabId } from "@/actions/user.action";

const MyLabReviews = async ({ labId, tag }: { labId: string, tag?: string }) => {
  const userIds: string[] = await fetchUserIdsByLabId(labId);
  const reviewsData = await fetchReviewsByUserIds(userIds, tag);

  if (reviewsData.length == 0) {
    return <div>No Reviews.</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {reviewsData.map((review) => {
        return <Review key={review.id} reviewData={review} />;
      })}
    </div>
  );
};

export default MyLabReviews;
