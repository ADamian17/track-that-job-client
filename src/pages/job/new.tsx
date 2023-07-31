import FormWrapper from "@/components/FormWrapper";
import Form from "@/components/UI/Form";
import NewJobFormContainer from "@/containers/NewJobFormContainer";
import SimpleLayout from "@/layouts/SimpleLayout";

export default function NewJob() {
  return (
    <SimpleLayout>
      <FormWrapper headline="Create New Job">
        <NewJobFormContainer />
      </FormWrapper>
    </SimpleLayout>
  )
}