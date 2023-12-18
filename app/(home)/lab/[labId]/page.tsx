import LabHeader from '@/components/LabHeader'
import { urlDecode } from '@/lib/utils'
import React from 'react'

const page = async(
  { params: { labId } } : { params : { labId: string }}
) => {
  const labId_decoded = urlDecode(labId)
  return (
    <div className='flex flex-col gap-5'>
      <LabHeader labId={labId_decoded}/>
      {/* <ReviewsByUser userId={userId} /> */}
    </div>
  )
}

export default page