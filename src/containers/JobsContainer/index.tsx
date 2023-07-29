import React from "react";

import EmptyJobList from "@/components/EmptyJobList";

import styles from "./JobsContainer.module.scss";
import Link from "next/link";
import { JobsType } from "@/types";

type JobsContainerType = {
  jobsData: JobsType
};

const JobsContainer: React.FC<JobsContainerType> = ({ jobsData }) => {
  console.log({ jobsData });

  const jobs = [
    'job 1',
    'job 2',
    'job 3',
    'job 4',
    'job 5',
    'job 6',
    'job 7',
    'job 8',
    'job 9',
    'job 10',
    'job 11',
    'job 12',
    'job 13',
    'job 14',
  ];
  const isEmpty = jobs.length <= 0
  const jobList = jobs && jobs.map(job => (<div key={job}><Link href="/job-detail">{job}</Link></div>))
  const jobsContent = isEmpty ? <EmptyJobList /> : jobList

  return (
    <section className={styles.jobsContainers}>
      {jobsContent}
    </section>
  )
};

export default JobsContainer;