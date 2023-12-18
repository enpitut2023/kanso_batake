import LabHeader from '@/components/LabHeader'
import React from 'react'

const page = async(
  { params: { labId } } : { params : { labId: string }}
) => {
  return (
    <div className='flex flex-col gap-5'>
      <LabHeader labId={labId}/>
      {/* <ReviewsByUser userId={userId} /> */}
    </div>
  )
}

export default page