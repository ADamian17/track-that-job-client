import React from "react";

import AddJobButton from "../AddJobButton";

import styles from "./EmptyJobList.module.scss";

const EmptyJobList = () => {
  return (
    <div className={styles.emptyJobList}>
      <svg className={styles.icon}>
        <use href="/icons/illustration-empty.svg#icon"></use>
      </svg>

      <h3>There is no Job yet.</h3>

      <p className={styles.copy}>Have you started your job search yet? Add a job and start your journey</p>

      <AddJobButton />
    </div>
  )
};

export default EmptyJobList;