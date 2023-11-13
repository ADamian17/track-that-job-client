import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";

import { SessionDataType, UserDataType } from "@/types";
import { User } from "@/libs/user";
import ProfileContainer from "@/containers/ProfileContainer/ProfileContainer";
import SimpleLayout from "@/layouts/SimpleLayout";
import Head from "next/head";
import { ProfileProvider } from "@/contexts/Profile.context";

type ProfileType = {
  userData: UserDataType
}

export default function Profile({ userData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const editButton = {
    buttonText: "Edit Profile",
    buttonUrl: "/profile/edit"
  }

  return (
    <>
      <Head>
        <title>Track that job | Profile</title>
      </Head>

      <SimpleLayout editButton={editButton}>
        <ProfileProvider currentUser={userData}>
          <ProfileContainer />
        </ProfileProvider>
      </SimpleLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ProfileType> = async (context) => {
  try {
    const session = await getSession({ req: context.req }) as SessionDataType;
    const jwtToken = session?.user?.signedJwt;
    const data = await User.get(jwtToken!);
    const isValid = session && data.status !== 401

    if (!isValid) {
      throw new Error("unauthorize user")
    }

    return {
      props: {
        userData: data.data,
      },
    };
  } catch (error) {
    const redirect = {
      destination: '',
      permanent: false
    }

    switch ((error as Error).message) {
      case "unauthorize user":
        redirect.destination = '/sign-in/'
        break
      default:
        redirect.destination = "/500"
        break
    }

    return {
      redirect
    }
  }
};