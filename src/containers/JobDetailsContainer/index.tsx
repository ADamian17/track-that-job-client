import React from "react";

import { JobType } from "@/types";

import styles from "./JobDetailsContainer.module.scss";
import Badge from "@/components/UI/Badge";
import Link from "next/link";

type JobDetailContainerType = {
  jobData: JobType
}

const JobDetailsContainer: React.FC<JobDetailContainerType> = ({ jobData }) => {
  const {
    company_name,
    createdAt,
    job_position,
    job_post_url,
    job_status,
    on_site,
    phone_screen,
    point_of_contact,
  } = jobData;

  const date = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <section className={styles.jobDetailsContainer}>
      <div className={styles.mainContent}>
        <h3>Position: {job_position}</h3>

        <div className={styles.copy}>
          <p>Company: {company_name}</p>

          <p>
            Phone Screen: {phone_screen}
          </p>
        </div>

        <p>
          On Site: {on_site}
        </p>

        <Badge
          badgeText={job_status}
        />
      </div>

      <Badge
        className={styles.date}
        badgeText={date}
      />

      <Link
        className={styles.jobPostUrl}
        href={job_post_url}
        target="blank"
      >
        {point_of_contact}

        <svg className={styles.icon}>
          <use href="/icons/icons.svg#icon-external-link"></use>
        </svg>
      </Link>
    </section>
  )
};

export default JobDetailsContainer;
