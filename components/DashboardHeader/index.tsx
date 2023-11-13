import React from "react";

import MobileNavButton from "../UI/MobileNavButton";

import styles from "./DashboardHeader.module.scss"

const DashboardHeader: React.FC = () => (
  <section
    className={styles.dashboardHeader}
    style={{ backgroundImage: `url(/assets/suggestions/mobile/background-header.png)` }}
  >
    <div className={styles.navCopy}>
      <h3>Track That Job</h3>
      <p>Jobs Board</p>
    </div>

    <MobileNavButton />
  </section>
)


export default DashboardHeader;
