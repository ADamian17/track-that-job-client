import React from "react";

import { JobType } from "@/types";

import styles from "./JobDetailsContainer.module.scss";
import Badge from "@/components/UI/Badge";
import Link from "next/link";
import Button from "@/components/UI/Buttons/Button";
import ButtonsGroup from "@/components/UI/Buttons/ButtonsGroup";
import DeleteJobDetailsSection from "@/components/DeleteJobDetailsSection";

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
      <div className={styles.topContent}>
        <div>
          <h3>Position: {job_position}</h3>
          <p>Applied On: {date}</p>
          <p>Company: {company_name}</p>
        </div>

        <Badge
          badgeText={job_status}
        />
      </div>

      <div className={styles.bottomContent}>
        <h3 className={styles.bottomContentHeadline}>Observations</h3>

        <p>Phone Screen: {phone_screen}</p>
        <p>On Site: {on_site}</p>

        <p>
          found on:{" "}
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
        </p>
      </div>

      <DeleteJobDetailsSection id={jobData._id} />
    </section>
  )
};

export default JobDetailsContainer;
