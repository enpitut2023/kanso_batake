import { fetchUser } from '@/actions/user.action';
import { SignOutButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link'
import React from 'react'

const Header = async () => {
  const user = await currentUser();
  if (!user) return (
    <header className='fixed z-50 w-screen justify-center border-b'>
      <div className='container flex flex-row max-w-5xl justify-between p-5 bg-white dark:bg-black'>
        <Link href="/">
          感想畑
        </Link>
        <Link href={`/sign-in`}>
          サインイン
        </Link>
      </div>
    </header>
  )
  
  return (
    <header className='fixed z-50 w-screen justify-center border-b'>
      <div className='container flex flex-row max-w-5xl justify-between p-5 bg-white dark:bg-black'>
        <Link href="/">
          感想畑
        </Link>
        <div className='flex flex-row gap-3'>
          <Link href={`/user/${user.id}`}>
            マイページ
          </Link>
          <SignOutButton>
            サインアウト
          </SignOutButton>
        </div>
      </div>
    </header>
  )
}

export default Header