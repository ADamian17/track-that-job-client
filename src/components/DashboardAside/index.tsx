import React, { useEffect } from 'react';

import DashboardItem from '../DashboardItem';
import DashboardJobsFilter from '../DashboardJobsFilter';

import styles from "./DashboardAside.module.scss";
import { useRouter } from 'next/router';
import useJobStatusStore, { JobStatusType } from '@/zustand/useJobStatusStore';


type DashboardSidebarProps = {
  className?: string
}

const DashboardAside: React.FC<DashboardSidebarProps> = ({ className }) => {
  const { query } = useRouter();
  const { setCurrentJobStatus } = useJobStatusStore(state => state)
  const hasQuery = query && query.hasOwnProperty("filterBy")

  useEffect(() => {
    if (hasQuery) {
      setCurrentJobStatus(query.filterBy as JobStatusType)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <aside className={`${styles.dashboardAside} ${className}`}>
      <DashboardJobsFilter />

      <DashboardItem>
        <p>Road Map</p>
      </DashboardItem>
    </aside>
  )
}
export default DashboardAside;
