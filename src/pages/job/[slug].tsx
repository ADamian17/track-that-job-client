import SimpleLayout from "@/layouts/SimpleLayout";
import { useRouter } from "next/router";

export default function JobDetail() {
  const router = useRouter();
  const id = router.query?.slug
  const editButton = {
    buttonText: "Edit Job",
    buttonUrl: `/job/edit/${id}`
  }

  return (
    <SimpleLayout editButton={editButton}>
      Job Detail
    </SimpleLayout>
  )
}