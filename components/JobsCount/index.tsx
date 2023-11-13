import useJobsStore from "@/zustand/jobs/useJobsStore";

import styles from "./JobsCount.module.scss";

const JobsCount: React.FC = (props) => {
  const { jobCount } = useJobsStore(state => state)

  return (
    <p className={styles.jobsCount}>
      Count: {jobCount}
    </p>
  )
};

export default JobsCount;
