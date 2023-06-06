import JobsContainer from '@/containers/JobsContainer'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useEffect } from 'react';
import useAuthStore from '@/zustand/authStore';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { currentUser } = useAuthStore(state => state);

  useEffect(() => {
    !currentUser && router.push("/sign-in")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DashboardLayout>
      <JobsContainer />
    </DashboardLayout>
  );
}