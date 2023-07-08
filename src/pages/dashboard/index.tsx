import JobsContainer from '@/containers/JobsContainer'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useEffect } from 'react';
import useAuthStore from '@/zustand/authStore';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <DashboardLayout>
      <JobsContainer />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  console.log(session);

  return {
    props: {},
  };
};
