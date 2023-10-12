import React from "react";
import isEmpty from "validator/lib/isEmpty";

import Form from "@/components/UI/Form";
import useFormFieldsStore, { UseFormField } from "@/zustand/useFormFieldsStore";
import useFormStepsStore from "@/zustand/useFormStepsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";

const LastName: React.FC = () => {
  const {
    email,
    firstName,
    lastName,
    setFieldError,
    setFieldValue,
    setValidField
  } = useFormFieldsStore()

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isEmpty(e.target.value)) {
      setFieldError("lastName", { error: true, msg: "This field can not be empty" })
      setValidField("lastName", false)
    }

    fieldsAreValid({
      firstName,
      lastName,
      email,
    }, isValidField => {
      if (isValidField) { }
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (lastName.error) {
      setFieldError("lastName", { error: false, msg: "" });
    }

    setFieldValue("lastName", e.target.value)
    setValidField("lastName", true)
  }

  return (
    <Form.Input
      error={lastName?.error}
      errorMsg={lastName?.msg}
      inputLabel="your last Name"
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="e.g Doe"
      value={lastName?.value || ""}
    />
  )
};

export default LastName;