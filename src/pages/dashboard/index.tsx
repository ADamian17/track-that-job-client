import JobsContainer from '@/containers/JobsContainer'
import DashboardLayout from '@/layouts/DashboardLayout'
import { getSession } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { apiUrl } from '@/utils';
import { Jobs } from '@/libs/jobs';
import { JobsType } from '@/types';

export default function Home({ jobsData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <DashboardLayout>
      <JobsContainer jobsData={jobsData} />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  jobsData: JobsType
}> = async (context) => {
  const session = await getSession({ req: context.req }) as { user: { signedJwt?: string } };

  if (!session || !session?.user?.signedJwt) {
    return {
      redirect: {
        destination: '/sign-in/',
        permanent: false
      }
    }
  }

  const jwtToken = session?.user?.signedJwt;
  const data = await Jobs.getAll(jwtToken)

  return {
    props: {
      jobsData: data.jobs
    },
  };
};
