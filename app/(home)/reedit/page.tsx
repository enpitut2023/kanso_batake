import { fetchUser } from '@/actions/user.action'
import { ReviewForm } from '@/components/ReEditReviewForm'
import { currentUser } from '@clerk/nextjs'
import { fetchReview } from '@/actions/review.action'
import { useState, useEffect } from 'react';
import React from 'react'

const page = async() => {
  const user = await currentUser()
  if(!user) return null
  const userInfo = await fetchUser(user.id)

  return (
    <div className="mt-5">
      setValue('username', 'デフォルトユーザー');
      <ReviewForm userId={user.id} userName={userInfo.name}/>
    </div>
  )
}

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // ここにAPIからデータを取得するなどの処理を書く
    const fetchData = async () => {
      const response = await fetch('あなたのAPIのURL');
      const data = await response.json();
      setInputValue(data.someValue);
    };

    fetchData();
  }, []); // 空の依存配列を渡すと、コンポーネントのマウント時に一度だけ実行されます

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default page