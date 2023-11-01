import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"


const Review = (
	{ id, paperTitle, contents }: { id: string, paperTitle: string, contents: string }
) => {
	return (
		<>
			<Card key={id}>
				<CardHeader>
					<CardTitle>
						{paperTitle}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<text>
						{contents}
					</text>
				</CardContent>
			</Card>
		</>
	)
}

export default Review