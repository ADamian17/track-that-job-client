import React from "react";

import AddJobButton from "../AddJobButton";

import styles from "./EmptyJobList.module.scss";
import { useRouter } from "next/router";

const EmptyJobList: React.FC<{ len: number }> = ({ len }) => {
  const { query } = useRouter();
  const filter = typeof query?.filterBy === 'string' && query?.filterBy?.replace("_", " ")
  const opt = "filterBy" in query && query.filterBy && len > 0;
  const copyOpts = {
    false: {
      headline: 'There is no Job yet.',
      subcopy: 'Have you started your job search yet? Add a job and start your journey'
    },
    true: {
      headline: `${filter} filter is empty`,
      subcopy: 'Jobs that match the filter will appear here. Updated job status'
    },
  } as const;

  const copy = copyOpts[opt as keyof typeof copyOpts];

  return (
    <div className={styles.emptyJobList}>
      <svg className={styles.icon}>
        <use href="/icons/illustration-empty.svg#icon"></use>
      </svg>

      <h3 className={styles.headline}>{copy.headline}</h3>

      <p className={styles.subcopy}>{copy.subcopy}</p>

      <AddJobButton />
    </div>
  )
};

export default EmptyJobList;