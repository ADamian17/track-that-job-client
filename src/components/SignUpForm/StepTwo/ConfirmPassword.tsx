import React from "react";
import isEmpty from "validator/lib/isEmpty";

import Form from "@/components/UI/Form";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

const ConfirmPassword: React.FC = () => {
  const {
    password,
    confirmPassword,
    setFieldError,
    setConfirmPasswordValue,
    setValidField
  } = useFormFieldsStore(state => state)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isEmpty(value)) {
      setFieldError("confirmPassword", { error: true, msg: "This field can not be empty" })
      setValidField("confirmPassword", false)
      return
    }

    if (password.value !== value) {
      setFieldError("confirmPassword", { error: true, msg: "Passwords don't match" })
      setValidField("confirmPassword", false)
      return
    }

    setFieldError("confirmPassword", { error: false, msg: "" })
    setValidField("confirmPassword", true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (confirmPassword.error) {
      setFieldError("confirmPassword", { error: false, msg: "" });
    }

    setConfirmPasswordValue(value)
  }

  return (
    <Form.Input
      autoComplete="on"
      error={confirmPassword?.error}
      errorMsg={confirmPassword?.msg}
      inputLabel="Confirm your password"
      name="confirmPassword"
      onBlur={handleBlur}
      onChange={handleChange}
      type="password"
      value={confirmPassword?.value || ""}
    />
  )
};

export default ConfirmPassword;
