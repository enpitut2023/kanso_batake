"use client";

import { userType } from "@/constants";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderContents = ({ user }: { user: userType }) => {
  const { signOut } = useClerk();

  return (
    <div className="container flex flex-row max-w-5xl justify-between p-5 bg-white dark:bg-black">
      <div className="flex flex-row gap-3">
        <Link href="/">
          <Image src="/logo2.png" width={100} height={50} alt="logo" />
        </Link>
        <a
          href="https://forms.gle/PrKwapdJXZniqSZs6"
          target="_blank"
          className="flex items-center justify-center"
        >
          お問い合わせはこちら
        </a>
        <Link href="/lab" className="flex items-center justify-center">
          研究室一覧
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <Link
          href={`/user/${user.id}`}
          className="flex items-center justify-center"
        >
          マイページ
        </Link>
        <Link
          href={`/lab/${user.affiliation}`}
          className="flex items-center justify-center"
        >
          マイラボ
        </Link>
        <button onClick={() => signOut()}>
          サインアウト
        </button>
      </div>
    </div>
  );
};

export default HeaderContents;
