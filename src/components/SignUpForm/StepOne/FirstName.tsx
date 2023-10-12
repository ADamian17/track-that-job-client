import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";

import Form from "@/components/UI/Form";
import useFormFieldsStore, { UseFormField } from "@/zustand/useFormFieldsStore";
import useFormStepsStore from "@/zustand/useFormStepsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";

const FirstName: React.FC = () => {
  const {
    email,
    firstName,
    lastName,
    setFieldError,
    setFieldValue,
    setValidField
  } = useFormFieldsStore(state => state)
  const {
    setStepToComplete,
  } = useFormStepsStore(state => state)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isEmpty(e.target.value)) {
      setFieldError("firstName", { error: true, msg: "This field can not be empty" })
      setValidField("firstName", false)
    }

    fieldsAreValid({
      firstName,
      lastName,
      email,
    }, isValidField => {
      if (isValidField) {
        setStepToComplete("one", true)
      } else {
        setStepToComplete("one", false)
      }
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (firstName.error) {
      setFieldError("firstName", { error: false, msg: "" });
    }

    setFieldValue("firstName", e.target.value)
    setValidField("firstName", true)
  }

  return (
    <Form.Input
      error={firstName?.error}
      errorMsg={firstName?.msg}
      inputLabel="your first Name"
      name="firstName"
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="e.g John"
      value={firstName?.value || ""}
    />
  )
};

export default FirstName;