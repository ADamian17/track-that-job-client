import React from "react";

import EmptyJobList from "@/components/EmptyJobList";
import JobCard from "@/components/JobCard";
import useJobsStore from "@/zustand/jobs/useJobsStore";

import styles from "./JobsContainer.module.scss";

const JobsContainer: React.FC = (props) => {
  const { jobsList, jobCount } = useJobsStore(state => state)

  const jobs = jobsList && jobsList.map(job => (<JobCard key={job._id} {...job} />))
  const jobsContent = jobCount === 0 ? <EmptyJobList len={jobsList?.length!} /> : jobs

  return (
    <section className={styles.jobsContainers}>
      {jobsContent}
    </section>
  )
};

export default JobsContainer;