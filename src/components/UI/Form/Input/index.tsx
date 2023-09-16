import React from 'react';

import styles from './Input.module.scss';
import FieldWrapper from '../FieldWrapper';

export type InputProps = {
  error?: boolean | null;
  errorMsg?: string;
  inputLabel?: string;
  inputDescription?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<InputProps> = ({
  error,
  errorMsg,
  inputLabel,
  inputDescription,
  name,
  type = 'text',
  ...rest
}) => {
  const inputStyles = `${styles.input} ${error && styles.inputError
    }`;

  return (
    <FieldWrapper
      error={error!}
      errorMsg={errorMsg!}
      inputDescription={inputDescription!}
      inputLabel={inputLabel!}
    >
      <input
        type={type}
        className={inputStyles}
        {...rest}
      />
    </FieldWrapper>
  );
};

export default Input;
