import FormWrapper from "@/components/FormWrapper";
import NewJobFormContainer from "@/containers/NewJobFormContainer";
import SimpleLayout from "@/layouts/SimpleLayout";
import { SessionDataType } from "@/types";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

type NewJobType = {
  jwtToken: string
}

export default function NewJob({ jwtToken }: NewJobType) {
  const styles = {
    ["--simple-layout-max-width" as string]: "54rem"
  }

  return (
    <SimpleLayout style={styles}>
      <FormWrapper headline="Create New Job">
        <NewJobFormContainer jwtToken={jwtToken} />
      </FormWrapper>
    </SimpleLayout>
  )
}

export const getServerSideProps: GetServerSideProps<NewJobType> = async (context) => {
  const session = await getSession({ req: context.req }) as SessionDataType;
  const jwtToken = session?.user?.signedJwt as string;

  return {
    props: {
      jwtToken,
    },
  };
};
