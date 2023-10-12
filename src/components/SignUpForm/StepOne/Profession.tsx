import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import Mailcheck from 'mailcheck';

import Form from "@/components/UI/Form";
import useFormFieldsStore, { UseFormField } from "@/zustand/useFormFieldsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";
import isEmpty from "validator/lib/isEmpty";

const Profession: React.FC = () => {
  const {
    profession,
    firstName,
    lastName,
    setFieldError,
    setFieldValue,
    setValidField
  } = useFormFieldsStore(state => state)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (isEmpty(e.target.value)) {
      setFieldError("profession", { error: true, msg: "This field can not be empty" })
      setValidField("profession", false)
    }

    fieldsAreValid({
      firstName,
      lastName,
      profession,
    }, isValidField => {
      if (isValidField) {
      }
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (profession.error) {
      setFieldError("profession", { error: false, msg: "" });
    }

    setFieldValue("profession", e.target.value)
    setValidField("profession", true)
  }

  return (
    <Form.Input
      inputLabel="your profession"
      name="profession"
      error={profession?.error}
      errorMsg={profession?.msg}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="e.g John"
      value={profession?.value || ""}
    />
  )
};

export default Profession;
