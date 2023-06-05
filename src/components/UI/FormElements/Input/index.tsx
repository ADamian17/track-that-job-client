import React from 'react';

import styles from './Input.module.scss';

export type FormFields =
  | 'setEmail'
  | 'setEmailError'
  | 'setFirstName'
  | 'setFirstNameError'
  | 'setLastName'
  | 'setLastNameError'
  | 'setPassword'
  | 'setPassword2'
  | 'setPassword2Error'
  | 'setPasswordError'
  | 'setProfession'
  | 'setProfessionError';

export type InputProps = {
  error?: boolean;
  errorMsg?: string;
  inputLabel?: string;
  name: string;
  setInputErrValue?: FormFields;
  setInputValue?: FormFields;
  type?: React.HTMLInputTypeAttribute;
  [key: string]: any;
};

const Input: React.FC<InputProps> = ({
  error,
  errorMsg,
  inputLabel,
  name,
  type = 'text',
  setInputErrValue,
  setInputValue,
  ...rest
}) => {
  const inputStyles = `${styles.input} ${
    error ? styles.inputError : undefined
  }`;

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{inputLabel}</label>
      <input
        data-set-input-err-value={setInputErrValue}
        data-set-input-value={setInputValue}
        type={type}
        name={name}
        {...rest}
        className={inputStyles}
      />
      {error ? <p style={{ color: '#d73737' }}>{errorMsg}</p> : ''}
    </div>
  );
};

export default Input;
