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
    <div className={styles.card}>
      <Link href={`/dashboard/job/${_id}`}>
        <h3>Job:  {job_position}</h3>
        <p>Company: {company_name}</p>
        <p>date: {date}</p>

        <Badge
          badgeText={job_status}
        />
      </Link>
    </div>
  )
}

export default JobCard;