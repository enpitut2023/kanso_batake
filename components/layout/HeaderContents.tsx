"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { ImLab } from "react-icons/im";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { userType } from "@/constants";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import Search from "../TagSearchBar";
import { useClerk } from "@clerk/nextjs";

export function HeaderContents({ user }: { user?: userType }) {
  const { signOut } = useClerk();

  if (!user) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <RxHamburgerMenu size={"2rem"} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>感想畑</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-between h-full pb-4 py-5">
            <div className="flex flex-col gap-3">
              <div>
                <Label>レビューの検索</Label>
                <Search placeholder="タグを入力" />
              </div>
              <div>
                <Label>意見・感想はこちら</Label>
                <a
                  href="https://forms.gle/PrKwapdJXZniqSZs6"
                  target="_blank"
                  className="block px-2 py-1"
                >
                  <text className="flex flex-row items-center gap-1">
                    Google Form <HiOutlineExternalLink />
                  </text>
                </a>
              </div>
            </div>
            <Link href="/sign-in" className="text-center">
              サインイン
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu size={"2rem"} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>感想畑</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full pb-4 py-5">
          <div className="flex flex-col gap-3">
            <div>
              <Label>レビューの検索</Label>
              <Search placeholder="タグを入力" />
            </div>
            <div>
              <Label>Explore</Label>
              <SheetClose className="flex">
                <Link
                  href={`/user/${user.id}`}
                  className="flex text-lg px-2 py-1 flex-row items-center gap-4 hover:underline"
                >
                  <IoPersonOutline /> マイページ
                </Link>
              </SheetClose>
              <SheetClose className="flex">
                <Link
                  href={`/lab/${user.affiliation}`}
                  className="flex text-lg px-2 py-1 flex-row items-center gap-4 hover:underline"
                >
                  <ImLab /> マイラボ
                </Link>
              </SheetClose>
            </div>
            <div>
              <Label>意見・感想はこちら</Label>
              <a
                href="https://forms.gle/PrKwapdJXZniqSZs6"
                target="_blank"
                className="block px-2 py-1"
              >
                <text className="flex flex-row items-center gap-1">
                  Google Form <HiOutlineExternalLink />
                </text>
              </a>
            </div>
          </div>
          <button onClick={() => signOut()}>サインアウト</button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
