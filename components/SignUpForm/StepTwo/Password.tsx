import React from "react";
import isEmpty from "validator/lib/isEmpty";

import Form from "@/components/UI/Form";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";
import isStrongPassword from "validator/lib/isStrongPassword";

const Password: React.FC = () => {
  const {
    password,
    setFieldError,
    setPasswordValue,
    setValidField
  } = useFormFieldsStore(state => state)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isEmpty(value)) {
      setFieldError("password", { error: true, msg: "This field can not be empty" })
      setValidField("password", false)
      return
    }

    if (!isStrongPassword(value)) {
      setFieldError("password", { error: true, msg: "Password must contain symbol - number - and upper case letter" })
      setValidField("password", false)
      return
    }

    setFieldError("password", { error: false, msg: "" })
    setValidField("password", true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (password.error) {
      setFieldError("password", { error: false, msg: "" });
    }

    setPasswordValue(value)
  }

  return (
    <Form.Input
      data-testid="sign-up-form-password"
      autoComplete="on"
      error={password?.error}
      errorMsg={password?.msg}
      inputLabel="your password"
      name="password"
      onBlur={handleBlur}
      onChange={handleChange}
      type="password"
      value={password?.value || ""}
    />
  )
};

export default Password;