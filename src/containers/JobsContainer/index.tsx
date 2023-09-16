import React from "react";

import EmptyJobList from "@/components/EmptyJobList";
import JobCard from "@/components/JobCard";
import useJobsStore from "@/zustand/jobs/useJobsStore";

import styles from "./JobsContainer.module.scss";

const JobsContainer: React.FC = (props) => {
  const { jobsList } = useJobsStore(state => state)

  const isEmpty = jobsList && jobsList?.length <= 0;
  const jobs = jobsList && jobsList.map(job => (<JobCard key={job._id} {...job} />))
  const jobsContent = isEmpty ? <EmptyJobList len={jobsList?.length!} /> : jobs

  return (
    <section className={styles.jobsContainers}>
      {jobsContent}
    </section>
  )
};

export default JobsContainer;