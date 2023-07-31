import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import DashboardItem from '../DashboardItem';
import DashboardJobsFilter from '../DashboardJobsFilter';

import { useRouter } from 'next/router';
import useJobStatusStore from '@/zustand/useJobStatusStore';
import { JobStatusType } from '@/types';

import styles from "./DashboardAside.module.scss";

type DashboardSidebarProps = {
  className?: string
}

const DashboardAside: React.FC<DashboardSidebarProps> = ({ className }) => {
  const { query } = useRouter();
  const { setCurrentJobStatus } = useJobStatusStore(state => state)
  const hasQuery = query && query.hasOwnProperty("filterBy")

  const handleLogout = () => {
    signOut();
  };

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
        <p>Account</p>
        <p onClick={handleLogout}>Logout</p>
      </DashboardItem>
    </aside>
  )
}

export default DashboardAside;
