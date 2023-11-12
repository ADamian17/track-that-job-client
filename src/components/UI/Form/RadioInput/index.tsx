import React from 'react';

import styles from './RadioInput.module.scss';

export type InputProps = {
  label: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const RadioInput: React.FC<InputProps> = ({
  label,
  ...rest
}) => (
  <div className={styles.field}>
    <input type="radio" {...rest} />

    <label htmlFor={rest?.id}>{label}</label>
  </div>
);

RadioInput.displayName = "RadioInput"

export default RadioInput;
