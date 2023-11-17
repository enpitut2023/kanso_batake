import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { userType } from '@/constants'

const ReviewHeader = (
	{ user } : {user:userType}
) => {
	return ( 
	<Card>
		<CardHeader>
			<CardTitle className="truncate leading-normal">
				{user.name}
			</CardTitle>
			<CardDescription>
				<div>
					{user.affiliation.map((institution) => {
							return (<p>{institution}</p>)
						})}
				</div>
                
        <div>
					{user.field.map((f) => {
							return (<p>{f}</p>)
						})}
				</div>
                <p>{ user.role }</p>
			</CardDescription>
		</CardHeader>
		<CardContent className='break-words whitespace-pre-line'>
		</CardContent>
	</Card>
	)
}

export default ReviewHeader