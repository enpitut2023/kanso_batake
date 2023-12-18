import LabHeader from '@/components/LabHeader'
import MyLabReviews from '@/components/MyLabReviews'
import { urlDecode } from '@/lib/utils'
import React from 'react'

const page = async(
  { params: { labId }, searchParams } : { params : { labId: string }, searchParams?: { tag?: string }}
) => {
  const labId_decoded = urlDecode(labId)
  return (
    <div className='flex flex-col gap-5'>
      <LabHeader labId={labId_decoded}/>
      <MyLabReviews labId={labId_decoded} tag={searchParams?.tag}/>
    </div>
  )
}

export default page