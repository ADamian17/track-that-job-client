import React, { forwardRef, useEffect, useState } from 'react';

import styles from './Input.module.scss';
import FieldWrapper from '../FieldWrapper';
import Input from '../Input';
import validator from 'validator';

export type EmailInputProps = {
  error?: boolean;
  errorMsg?: string;
  inputLabel?: string;
  inputDescription?: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const EmailInput: React.FC<EmailInputProps> = ({
  error,
  errorMsg,
  inputLabel,
  inputDescription,
  name,
  value,
  setEmail,
  ...rest
}) => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const validateEmail = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      e.type === "blur" &&
      e.target.value.length >= 1 &&
      !validator.isEmail(e.target.value)
    ) {
      setEmailError(true)
      setEmailErrorMsg("Please enter a valid email")
      return;
    }

    setEmailError(false)
    setEmailErrorMsg("")
  }

  return (
    <Input
      error={emailError || emailError}
      errorMsg={emailErrorMsg || errorMsg}
      inputLabel={inputLabel}
      name={name}
      onBlur={validateEmail}
      onChange={handleChange}
      onFocus={validateEmail}
      type='text'
      value={value}
      {...rest}
    />
  );
};

EmailInput.displayName = "EmailInput"

export default EmailInput;
