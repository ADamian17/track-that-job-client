import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';

import { Jobs } from '@/libs/jobs';
import { JobsType, SessionDataType, } from '@/types';
import DashboardLayout from '@/layouts/DashboardLayout'
import JobsContainer from '@/containers/JobsContainer'

export default function Home({ jobsData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <JobsContainer jobsData={jobsData} />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  jobsData: JobsType | null
}> = async (context) => {
  const session = await getSession({ req: context.req }) as SessionDataType;
  const jwtToken = session?.user?.signedJwt;
  const data = await Jobs.getAll(jwtToken!);
  const isValid = session && data.status !== 401
  let jobsData: JobsType | null = [];

  if (!isValid) {
    return {
      redirect: {
        destination: '/sign-in/',
        permanent: false
      }
    }
  }

  if ("jobs" in data) {
    jobsData = data?.jobs
  }

  return {
    props: {
      jobsData
    },
  };
};
