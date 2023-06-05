import JobsContainer from '@/containers/JobsContainer'
import DashboardLayout from '@/layouts/DashboardLayout'

export default function Home() {
  return (
    <DashboardLayout>
      <JobsContainer />
    </DashboardLayout>
  )
}