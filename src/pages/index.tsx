import { useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';

import { Jobs } from '@/libs/jobs';
import { JobsType, SessionDataType, } from '@/types';
import DashboardLayout from '@/layouts/DashboardLayout'
import JobsContainer from '@/containers/JobsContainer'
import useJobsStore, { UseJobsStoreState } from '@/zustand/jobs/useJobsStore';

export default function Home({ jobsList, jobCount }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { setJobsList } = useJobsStore(state => state)

  useEffect(() => {
    setJobsList({ jobsList, jobCount })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobsList, setJobsList])

  return (
    <DashboardLayout>
      <JobsContainer />
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps<UseJobsStoreState> = async (context) => {
  const session = await getSession({ req: context.req }) as SessionDataType;
  const jwtToken = session?.user?.signedJwt;
  const data = await Jobs.getAll(jwtToken!, context.query);
  const isValid = session && data.status !== 401
  let jobsList: UseJobsStoreState["jobsList"] = [];
  let jobCount: UseJobsStoreState["jobCount"] = 0;

  if (!isValid) {
    return {
      redirect: {
        destination: '/sign-in/',
        permanent: false
      }
    }
  }

  if ("jobs" in data && "count" in data) {
    jobsList = data?.jobs
    jobCount = data?.count
  }

  return {
    props: {
      jobsList,
      jobCount
    },
  };
};
