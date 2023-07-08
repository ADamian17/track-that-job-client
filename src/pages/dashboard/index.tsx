import { useEffect } from 'react';
import JobsContainer from '@/containers/JobsContainer'
import DashboardLayout from '@/layouts/DashboardLayout'
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { apiUrl } from '@/utils';
import { AppProps } from 'next/app';

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <JobsContainer />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req }) as { user: { signedJwt?: string } };

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in/',
        permanent: false
      }
    }
  }

  // const res = await fetch(apiUrl`/jobs`, {
  //   headers: { authorization: `Bearer ${session?.user?.signedJwt}` }
  // })

  // const data = await res.json()

  return {
    props: {},
  };
};
