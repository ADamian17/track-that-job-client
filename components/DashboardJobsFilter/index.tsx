import React from "react";

import { jobsFilters } from "@/utils";
import { JobStatusType } from "@/types";
import BadgeWithLink from "../UI/BadgeWithLink";
import DashboardItem from "../DashboardItem";
import useJobStatusStore from "@/zustand/jobs/useJobStatusStore";

import styles from "./DashboardJobsFilter.module.scss";

const DashboardJobsFilter: React.FC = (props) => {
  const { currentJobStatus, setCurrentJobStatus } = useJobStatusStore(state => state)

  const jobsFiltersList = jobsFilters.map(filter => {
    const current = filter.text.toLowerCase().replace(" ", "_")
    const isActive = current === currentJobStatus
    const handleClick = () => setCurrentJobStatus(current as JobStatusType);

    return (
      <BadgeWithLink
        key={filter.text}
        badgeText={filter.text}
        badgeLink={filter.href}
        active={isActive}
        handleClick={handleClick}
      />
    )
  })

  return (
    <DashboardItem className={styles.dashboardJobsFilter}>
      {jobsFiltersList}
    </DashboardItem>
  )
};

export default DashboardJobsFilter;