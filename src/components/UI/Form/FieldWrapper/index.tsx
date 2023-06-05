import React from 'react';

import styles from './FieldWrapper.module.scss';

export type InputProps = {
  error: boolean;
  errorMsg: string;
  inputLabel: string;
  inputDescription: string;
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

const FieldWrapper: React.FC<InputProps> = ({
  children,
  error,
  errorMsg,
  inputDescription,
  inputLabel,
  ...rest
}) => (
  <div className={styles.inputWrapper}>
    <div className={styles.inputLabelWrapper}>
      <label className={styles.inputLabel} {...rest}>
        {inputLabel}
      </label>

      <p className={styles.inputDescription}>{inputDescription}</p>
    </div>

    {children}

    {error && <p className={styles.inputErrorMsg}>{errorMsg}</p>}
  </div>
);

export default FieldWrapper;
