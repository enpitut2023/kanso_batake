import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { fetchUser } from '@/actions/user.action'

const ReviewHeader = async (
	{ userId } : {userId: string}
) => {
	const user = await fetchUser(userId)
	return ( 
	<Card>
		<CardHeader>
			<CardTitle className="truncate leading-normal">
				{user.name}
			</CardTitle>
			<CardDescription>
					{user.affiliation.map((institution) => {
							return (<p>{institution}</p>)
						})}
					{user.field.map((f) => {
							return (<p>{f}</p>)
						})}
          <p>{ user.role }</p>
			</CardDescription>
		</CardHeader>
		<CardContent className='break-words whitespace-pre-line'>
		</CardContent>
	</Card>
	)
}

export default ReviewHeader