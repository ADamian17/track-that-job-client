import React, { useContext } from "react";

import { OtherProfessionCtx } from "../context/OtherProfession.provider";

import styles from "../OtherProfessionInput.module.scss";

const OpInputField: React.FC<{ className?: string }> = ({ className }) => {
  const {
    handleFocus,
    handleBlur,
    handleChange,
    handleKeyUp,
    inputVal,
    hasError,
    inputRef,
  } = useContext(OtherProfessionCtx);
  const stylesError = hasError && styles.error;

  return (
    <div className={styles.opInputFieldWrapper}>
      <input
        className={`${styles.opInputField} ${stylesError} ${className}`}
        name="otherProfession"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        placeholder="Start typing..."
        type="text"
        value={inputVal}
        ref={inputRef}
        data-testid="listbox-input"
      />
      {hasError && (
        <>
          <svg
            className={styles.inputErrorIcon}
            data-testid="listbox-input-error-icon"
          >
            <use href="/icons/inputError.svg#inputError"></use>
          </svg>
          <p
            className={styles.inputErrorCopy}
            data-testid="listbox-input-error-copy"
          >
            Please enter a valid profession.
          </p>
        </>
      )}
    </div>
  );
};

export default OpInputField;
