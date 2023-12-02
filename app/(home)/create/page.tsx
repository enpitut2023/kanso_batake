import { ReviewForm } from '@/components/ReviewForm'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async() => {
  const user = await currentUser()
  if(!user) return null

  return (
    <div className="mt-5">
      <ReviewForm userId={user.id} />
    </div>
  )
}

export default page