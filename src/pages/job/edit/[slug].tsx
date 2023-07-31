import FormWrapper from "@/components/FormWrapper";
import SimpleLayout from "@/layouts/SimpleLayout";
import { useRouter } from "next/router";

export default function EditJob() {
  const router = useRouter();
  const id = router.query?.slug

  return (
    <SimpleLayout>
      <FormWrapper
        headline="Editing Add a dark theme option"
        icon="edit"
      >
        <form>
          <input type="text" placeholder="title" />
        </form>
      </FormWrapper>
    </SimpleLayout>
  )
}
