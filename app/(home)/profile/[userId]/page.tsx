import { fetchUser } from '@/actions/user.action';
import { ProfileEdittingForm } from '@/components/form/ProfileEdittingForm';
import { currentUser } from '@clerk/nextjs'
import React from 'react'

const page = async(
  { params: { userId }} : { params : { userId: string }}
) => {
  const user = await fetchUser(userId);
  console.log(user?.id)
  if(!user){
    console.log("null")
    return null
  } 

  return (
    <div className='flex flex-col mt-5'>
      <h1 className='text-3xl font-bold mb-5'>
        ユーザー情報の修正
      </h1>
      <ProfileEdittingForm user={user} />
    </div>
  )
}

export default page