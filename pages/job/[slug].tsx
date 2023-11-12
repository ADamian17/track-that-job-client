import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { JobType } from "@/types";
import { SessionDataType } from "@/types";
import JobDetailsContainer from "@/containers/JobDetailsContainer";
import SimpleLayout from "@/layouts/SimpleLayout";
import { Jobs } from "@/libs/jobs";

type JobDetailType = {
  jobData: JobType
}

const JobDetail: React.FC<JobDetailType> = ({ jobData }) => {
  const editButton = {
    buttonText: "Edit Job",
    buttonUrl: `/job/edit/${jobData?._id}`
  }

  return (
    <SimpleLayout editButton={editButton}>
      <JobDetailsContainer jobData={jobData} />
    </SimpleLayout>
  )
}

export default JobDetail;

export const getServerSideProps: GetServerSideProps<JobDetailType> = async (context) => {
  try {
    const session = await getSession({ req: context.req }) as SessionDataType;
    const jwtToken = session?.user?.signedJwt as string;
    const id = context.query?.slug as string;
    const data = await Jobs.getOne(jwtToken, id);
    const isValid = session && data.status !== 401

    if (!isValid) {
      throw new Error("unauthorize user")
    }

    return {
      props: {
        jobData: data.data,
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