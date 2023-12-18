import LabHeader from '@/components/LabHeader'
import React from 'react'

const page = async(
  { params: { userId } } : { params : { userId: string }}
) => {
  return (
    <div className='flex flex-col gap-5'>
      <LabHeader userId={userId}/>
      {/* <ReviewsByUser userId={userId} /> */}
    </div>
  )
}

export default page