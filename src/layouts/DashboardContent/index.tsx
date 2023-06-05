import React from 'react';

import AddJobButton from '@/components/AddJobButton';

import styles from "./DashboardContent.module.scss"

type DashboardContentProps = {
  children: React.ReactNode
}

const DashboardContent: React.FC<DashboardContentProps> = ({ children }) => {
  return (
    <section className={styles.dashboardContent}>
      <nav className={styles.dashboardContentNav}>
        <div>filter</div>

        <AddJobButton />
      </nav>

      <div className={styles.dashboardJobContainerWrapper}>
        {children}
      </div>
    </section>
  )
}

export default DashboardContent;