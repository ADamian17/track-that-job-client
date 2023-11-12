import React from 'react';

import styles from './Fieldset.module.scss';

export type InputProps = {
  error?: boolean;
  errorMsg?: string;
  inputLabel: string;
  inputDescription: string;
  children: React.ReactNode
}

const Fieldset: React.FC<InputProps> = ({
  children,
  error,
  errorMsg,
  inputDescription,
  inputLabel,
}) => (
  <fieldset className={styles.wrapper} id={inputLabel.toLowerCase()}>
    <section className={styles.labelWrapper}>
      <legend className={styles.label}>{inputLabel}</legend>
      <p className={styles.description}>{inputDescription}</p>
    </section>

    {children}

    {error && <p className={styles.errorMsg}>{errorMsg}</p>}
  </fieldset>
);

export default Fieldset;
