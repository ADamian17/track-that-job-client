import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAuthStore from '@/zustand/authStore';

export default function Home() {
  // const router = useRouter();
  // const { currentUser } = useAuthStore(state => state);

  // useEffect(() => {
  //   !currentUser ? router.push("/sign-in") : router.push("/dashboard")
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div data-testid="home-page">
      ...authenticating
    </div>
  )
}