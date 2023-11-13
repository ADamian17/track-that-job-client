import React from "react";

import styles from "./DashboardItem.module.scss"

type DashboardItemProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const DashboardItem: React.FC<DashboardItemProps> = ({ children, className, ...rest }) => (
  <div
    className={`${styles.dashboardItem} ${className}`}
    {...rest}
  >
    {children}
  </div>
)

export default DashboardItem;
