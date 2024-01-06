import { fetchReviewsByFilter } from "@/actions/review.action";
import React from "react";
import Review from "./Review";
import ReactMarkDown from "react-markdown";

const Reviews = async ({ tag } : { tag?: string }) => {
  const reviewsData = await fetchReviewsByFilter(tag)
  const demo = `
  # 新年
  ## 明けまして
  ### おめでとう
  #### あはは
  `

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
      {reviewsData.map((review) => {
        return <Review key={review.id} reviewData={review} />;
      })}
    </div>
    </>
  );
};

export default Reviews;
