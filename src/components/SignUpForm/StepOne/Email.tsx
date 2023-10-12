import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

import Form from "@/components/UI/Form";
import useFormFieldsStore, { UseFormField } from "@/zustand/useFormFieldsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";
import useFormStepsStore from "@/zustand/useFormStepsStore";

const Email: React.FC = () => {
  const {
    firstName,
    lastName,
    email,
    setFieldError,
    setFieldValue,
    setValidField
  } = useFormFieldsStore(state => state)
  const { setStepToComplete } = useFormStepsStore(state => state)
  const [suggestedEmail, setSuggestedEmail] = useState<string | null>(null)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name as UseFormField === "email" && !isEmail(e.target.value)) {
      setFieldError("email", { error: true, msg: "Please enter a valid email" })
      setValidField("email", false)
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
    if (email.error) {
      setFieldError("email", { error: false, msg: "" });
    }

    setFieldValue("email", e.target.value)
    setValidField("email", true)
  }

  return (
    <>
      <Form.Input
        error={email?.error}
        errorMsg={email?.msg}
        inputLabel="your email"
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g johndoe@gmail.com"
        value={email?.value || ""}
      />
      {
        suggestedEmail &&
        suggestedEmail !== email.value &&
        (
          <p onClick={() => {
            setFieldValue("email", suggestedEmail)
            setSuggestedEmail(null)
          }}>Did you mean: {suggestedEmail}?</p>
        )}
    </>
  )
};

export default Email;