import { SessionDataType } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      ...authenticating
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req }) as SessionDataType;

  if (!session || !session?.user?.signedJwt) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  };
};