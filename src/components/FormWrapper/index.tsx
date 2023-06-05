import React from "react";

import styles from "./FormWrapper.module.scss";

type FormWrapperType = {
  children: React.ReactNode;
  headline: string;
  icon?: "new" | "edit";
};

const FormWrapper: React.FC<FormWrapperType> = ({
  children,
  headline,
  icon = "new",
}) => (
  <section className={styles.formWrapper}>
    <svg width={40} height={40} className={styles.formIcon}>
      <use href={`/icons/forms-icons.svg#${icon}`}></use>
    </svg>

    <div className={styles.formContainer}>
      <h2 className={styles.headline}>
        {headline}
      </h2>

      {children}
    </div>
  </section>
);

export default FormWrapper;
