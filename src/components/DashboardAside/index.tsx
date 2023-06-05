import React from 'react';

import DashboardItem from '../DashboardItem';

import styles from "./DashboardAside.module.scss";

type DashboardSidebarProps = {
  className?: string
}

const DashboardAside: React.FC<DashboardSidebarProps> = ({ className }) => (
  <aside className={`${styles.dashboardAside} ${className}`}>
    <DashboardItem>
      <p>filter</p>
    </DashboardItem>

    <DashboardItem>
      <p>Road Map</p>
    </DashboardItem>
  </aside>
)

export default DashboardAside;
