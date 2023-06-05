import React from "react";

import styles from "./DashboardItem.module.scss"

type DashboardItemProps = {
  children: React.ReactNode
}

const DashboardItem: React.FC<DashboardItemProps> = ({ children }) => (
  <section className={styles.dashboardItem}>
    {children}
  </section>
)

export default DashboardItem;
