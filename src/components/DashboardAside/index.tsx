import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import DashboardItem from '../DashboardItem';
import DashboardJobsFilter from '../DashboardJobsFilter';

import { useRouter } from 'next/router';
import useJobStatusStore from '@/zustand/useJobStatusStore';
import { JobStatusType } from '@/types';

import styles from "./DashboardAside.module.scss";
import Link from 'next/link';

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
        <Link href="/profile" className={styles.asideNavItem}>
          <span>Profile</span>
          <svg>
            <use href='/icons/aside-icons.svg#icon-user'></use>
          </svg>
        </Link>

        <p
          onClick={handleLogout}
          className={styles.asideNavItem}
        >
          <span>Logout</span>
          <svg>
            <use href='/icons/aside-icons.svg#icon-logout'></use>
          </svg>
        </p>
      </DashboardItem>
    </aside>
  )
}

export default DashboardAside;
