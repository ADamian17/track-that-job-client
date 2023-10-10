import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";

import { SessionDataType, UserDataType } from "@/types";
import { User } from "@/libs/user";
import FormWrapper from "@/components/FormWrapper";
import ProfileForm from "@/components/ProfileForm";
import SimpleLayout from "@/layouts/SimpleLayout";

type ProfileType = {
  userData: UserDataType
}

export default function EditProfile({ userData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const styles = {
    ["--simple-layout-max-width" as string]: "54rem"
  }

  return (
    <SimpleLayout style={styles}>
      <FormWrapper
        headline="Editing your profile"
        icon="edit"
      >
        <ProfileForm userData={userData?.user} isEditPage />
      </FormWrapper>
    </SimpleLayout>
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