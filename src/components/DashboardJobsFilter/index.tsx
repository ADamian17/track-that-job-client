import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { jobsFilters } from "@/utils";
import Badge from "../UI/Badge";
import DashboardItem from "../DashboardItem";

import styles from "./DashboardJobsFilter.module.scss";
import useJobStatusStore, { JobStatusType } from "@/zustand/useJobStatusStore";

const DashboardJobsFilter: React.FC = (props) => {
  const { currentJobStatus, setCurrentJobStatus } = useJobStatusStore(state => state)

  const jobsFiltersList = jobsFilters.map(filter => {
    const current = filter.text.toLowerCase().replace(" ", "_")
    const isActive = current === currentJobStatus
    const handleClick = () => setCurrentJobStatus(current as JobStatusType);

    return (
      <Badge
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