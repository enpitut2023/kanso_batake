import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

import { fetchUser } from '@/actions/user.action'
import { fetchUserIdsByLabId } from '@/actions/user.action'
import { fetchUsers } from '@/actions/user.action'
import { userType } from '@/constants'


const LabHeader = async (
	{ labId } : {labId: string}
) => {
    const userIds:string[] = await fetchUserIdsByLabId(labId)
	const users:userType[] = await fetchUsers(userIds)
  
	return ( 
	<Card>
		<CardHeader>
			<CardTitle className="truncate leading-normal">
				{labId}
			</CardTitle>
			<div className='text-sm text-muted-foreground'>
					所属:{users.map((user) => {
						return (<p key={user.id}> {user.name} </p>)
					})}
			</div>

		</CardHeader>
		<CardContent className='break-words whitespace-pre-line'>
		</CardContent>
	</Card>
	)
}

export default LabHeader