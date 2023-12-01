import { OnboadingForm } from '@/components/OnboardingForm'
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async () => {
  const user = await currentUser();
  if(!user) return null

  return (
      <OnboadingForm userId={user.id} />
  )
}

export default page