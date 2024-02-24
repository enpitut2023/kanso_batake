import Reviews from "@/components/top/Reviews"
import { Suspense } from "react"
import Search from "@/components/TagSearchBar"
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/actions/user.action";
import { userType } from "@/constants";

export default async function Home({
    searchParams,
  }: {
    searchParams?: {
      tag?: string
    };}
) {
    const _user = await currentUser();
    let userInfo = null;
    if (_user) userInfo = await fetchUser(_user.id)
  return (
    <div className="flex flex-col gap-10 mt-2">
      <div className="flex flex-row gap-20">
        <Search placeholder="タグを入力"/>
      </div>
      <Suspense>
        <Reviews fields={userInfo?.field} tag={searchParams?.tag}/>
      </Suspense>
    </div>
  )
}
