import ReviewHeader from '@/components/ReviewerHeader'
import ReviewsByUser from '@/components/ReviewsByUser'
import React from 'react'

const page = async(
  { params: { userId } } : { params : { userId: string }}
) => {
  return (
    <div>
      <ReviewHeader userId={userId}/>
      <ReviewsByUser userId={userId} />
    </div>
  )
}

export default page