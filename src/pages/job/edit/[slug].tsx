import FormWrapper from "@/components/FormWrapper";
import JobEditFormContainer from "@/containers/JobEditFormContainer";
import SimpleLayout from "@/layouts/SimpleLayout";
import { useRouter } from "next/router";

export default function EditJob() {
  const router = useRouter();
  const id = router.query?.slug

  const styles = {
    ["--simple-layout-max-width" as string]: "54rem"
  }

  return (
    <SimpleLayout style={styles}>
      <FormWrapper
        headline="Editing Job"
        icon="edit"
      >
        <JobEditFormContainer />
      </FormWrapper>
    </SimpleLayout>
  )
}
