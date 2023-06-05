import React, { useState } from 'react';

import EyeIcon from '../../../svgIcons/Eye';
import EyeBlockedIcon from '../../../svgIcons/EyeBlocked';
import Input, { InputProps } from '../Input';

import styles from './InputPassword.module.scss';

const InputPassword: React.FC<InputProps> = ({
  name,
  error,
  errorMsg,
  inputLabel,
  setInputErrValue,
  setInputValue,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : 'password';
  const eyeIcon = showPassword ? (
    <EyeBlockedIcon onClick={handleShowPassword} className={styles.inputIcon} />
  ) : (
    <EyeIcon onClick={handleShowPassword} className={styles.inputIcon} />
  );

  return (
    <div className={styles.inputContainer}>
      <Input
        setInputErrValue={setInputErrValue}
        setInputValue={setInputValue}
        inputLabel={inputLabel}
        type={inputType}
        error={error}
        errorMsg={errorMsg}
        name={name}
        {...rest}
      />
      {eyeIcon}
    </div>
  );
};

export default InputPassword;

/* 
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
<div>
<p>
<Circle />
More than 8 characters
</p>

<p>
<Circle />
Include special characters, numbers, lowercase and uppercase letters
</p>
</div> */
