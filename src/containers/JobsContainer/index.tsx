import React from "react";

import EmptyJobList from "@/components/EmptyJobList";

import styles from "./JobsContainer.module.scss";
import Link from "next/link";
import { JobsType } from "@/types";
import Badge from "@/components/UI/Badge";
import JobCard from "@/components/JobCard";

type JobsContainerType = {
  jobsData: JobsType
};

const JobsContainer: React.FC<JobsContainerType> = ({ jobsData }) => {
  const isEmpty = jobsData && jobsData.length <= 0;
  const jobList = jobsData && jobsData.map(job => (<JobCard key={job._id} {...job} />))
  const jobsContent = isEmpty ? <EmptyJobList /> : jobList
  console.log({ jobsData });

  return (
    <section className={styles.jobsContainers}>
      {jobsContent}
    </section>
  )
};

export default JobsContainer;