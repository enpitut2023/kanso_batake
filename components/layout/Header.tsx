import { fetchUser } from '@/actions/user.action';
import { SignOutButton, currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import HeaderContents from './HeaderContents';

const Header = async () => {
  const _user = await currentUser();
  if (!_user) return (
    <header className='fixed z-50 w-screen justify-center border-b'>
      <div className='container flex flex-row max-w-5xl justify-between p-5 bg-white dark:bg-black'>
        <div className='flex flex-row gap-3'>
          <Link href="/">
            <Image src="/logo2.png" width={100} height={50} alt="logo"/>
          </Link>
          <a href="https://forms.gle/PrKwapdJXZniqSZs6" target='_blank' className="flex items-center justify-center">
            お問い合わせはこちら
          </a>
        </div>
        <Link href={`/sign-in`} className='flex items-center justify-center'>
          サインイン
        </Link>
      </div>
    </header>
  )

  const user = await fetchUser(_user.id)
  
  return (
    <header className='fixed z-50 w-screen justify-center border-b'>
      <HeaderContents user={user}/>
    </header>
  )
}

export default Header