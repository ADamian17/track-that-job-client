import { JobType } from "@/types";
import Link from "next/link";

import Badge from "../UI/Badge";

import styles from "./JobCard.module.scss";

const JobCard: React.FC<JobType> = ({ _id, job_status, job_position, company_name, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.card} data-testid="job-card">
      <Link href={`/job/${_id}`} className={styles.cardBody}>
        <h3 className={styles.headline}>Position:  {job_position}</h3>
        <p>applied on: {date}</p>
        <p>Company: {company_name}</p>

        <Badge
          badgeText={job_status}
        />
      </Link>
    </div>
  )
}

export default JobCard;
