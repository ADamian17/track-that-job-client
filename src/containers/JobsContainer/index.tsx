import React from "react";

import { JobsType } from "@/types";
import EmptyJobList from "@/components/EmptyJobList";
import JobCard from "@/components/JobCard";

import styles from "./JobsContainer.module.scss";


type JobsContainerType = {
  jobsData: JobsType | null
};

const JobsContainer: React.FC<JobsContainerType> = ({ jobsData }) => {
  const isEmpty = jobsData && jobsData.length <= 0;
  const jobList = jobsData && jobsData.map(job => (<JobCard key={job._id} {...job} />))
  const jobsContent = isEmpty ? <EmptyJobList len={jobsData.length} /> : jobList

  return (
    <section className={styles.jobsContainers}>
      {jobsContent}
    </section>
  )
};

export default JobsContainer;