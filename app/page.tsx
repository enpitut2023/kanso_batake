import { paperData } from "@/constants"
import Link from "next/link"

export default async function Home() {
  return (
    <div>
        {
          paperData.map((paper) => {
            return (
              <ul>
                <li>title: {paper.title}</li>
                <li>tldr: {paper.tldr}</li>
                <li><Link href={`review/${paper.id}`}>感想はこちら</Link></li>
              </ul>
            )
          })
        }
    </div>
  )
}
