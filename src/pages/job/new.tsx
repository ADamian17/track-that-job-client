import FormWrapper from "@/components/FormWrapper";
import Form from "@/components/UI/Form";
import NewJobFormContainer from "@/containers/NewJobFormContainer";
import SimpleLayout from "@/layouts/SimpleLayout";

export default function NewJob() {
  const styles = {
    ["--simple-layout-max-width" as string]: "54rem"
  }

  return (
    <SimpleLayout style={styles}>
      <FormWrapper headline="Create New Job">
        <NewJobFormContainer />
      </FormWrapper>
    </SimpleLayout>
  )
}