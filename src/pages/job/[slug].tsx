import SimpleLayout from "@/layouts/SimpleLayout";
import { useRouter } from "next/router";

export default function JobDetail() {
  const router = useRouter();
  const id = router.query?.slug

  return (
    <SimpleLayout editJobUrl={`/job/edit/${id}`}>
      Job Detail
    </SimpleLayout>
  )
}