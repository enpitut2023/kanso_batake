import Reviews from "@/components/Reviews"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>
    </div>
  )
}
