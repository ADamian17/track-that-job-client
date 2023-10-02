import FormWrapper from "@/components/FormWrapper";
import Button from "@/components/UI/Buttons/Button";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import Form from "@/components/UI/Form";
import { useProfile } from "@/contexts/Profile.context";
import SimpleLayout from "@/layouts/SimpleLayout";
import { User } from "@/libs/user";
import { SessionDataType, UserDataType } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

type ProfileType = {
  userData: UserDataType
}

export default function EditProfile({ userData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const styles = {
    ["--simple-layout-max-width" as string]: "54rem"
  }

  return (
    <SimpleLayout style={styles}>
      <FormWrapper
        headline="Editing your profile"
        icon="edit"
      >
        <Form>
          <Form.Input
            inputLabel="your first Name"
            value={userData?.user?.first_name}
          />

          <Form.Input
            inputLabel="your last Name"
            value={userData?.user?.last_name}
          />
          <Form.EmailInput
            inputLabel="your email"
            placeholder="e.g johndoe@gmail.com"
            setEmail={() => { }}
            value={userData?.user?.email}
          />

          <Form.Input
            inputLabel="your profession"
            value={userData?.user?.profession}
          />

          <ButtonsGroup>
            <Button
              onClick={() => router.back()}
              text="cancel"
              type="button"
              variant="is-info"
            />
            <Button
              text="submit"
              type="submit"
              variant="is-primary"
            />
          </ButtonsGroup>
        </Form>
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