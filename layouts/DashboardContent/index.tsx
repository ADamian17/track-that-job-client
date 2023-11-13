import React from 'react';

import AddJobButton from '@/components/AddJobButton';
import JobsCount from '@/components/JobsCount';

import styles from "./DashboardContent.module.scss"

type DashboardContentProps = {
  children: React.ReactNode
}

const DashboardContent: React.FC<DashboardContentProps> = ({ children }) => {
  return (
    <section className={styles.dashboardContent}>
      <nav className={styles.dashboardContentNav}>
        <JobsCount />

        <AddJobButton />
      </nav>

      <div className={styles.dashboardJobContainerWrapper}>
        {children}
      </div>
    </section>
  )
}

export default DashboardContent;
