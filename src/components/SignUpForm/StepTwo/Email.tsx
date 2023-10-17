import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import Mailcheck from 'mailcheck';

import Form from "@/components/UI/Form";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

const Email: React.FC = () => {
  const {
    email,
    setFieldError,
    setEmailValue,
    setValidField
  } = useFormFieldsStore(state => state)
  const [suggestedEmail, setSuggestedEmail] = useState<string | null>(null)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isEmpty(value)) {
      setFieldError("email", { error: true, msg: "This field can not be empty" })
      setValidField("email", false)
      return
    }

    if (!isEmail(value)) {
      setFieldError("email", { error: true, msg: "Please Enter a valid Email" })
      setValidField("email", false)
      return
    }

    setFieldError("email", { error: false, msg: "" })
    setValidField("email", true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (email.error) {
      setFieldError("email", { error: false, msg: "" });
    }

    setEmailValue(value)

    if (isEmail(value)) {
      Mailcheck.run({
        domains: ['gmail.com', 'aol.com'],
        secondLevelDomains: ['hotmail'],
        topLevelDomains: ["com", "net", "org"],
        email: e.target.value,
        suggested: (suggestion: any) => {
          setSuggestedEmail(suggestion.full)
        },
      });
    }
  }

  return (
    <>
      <Form.Input
        data-testid="sign-up-form-email"
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
        !isEmpty(email.value) &&
        suggestedEmail &&
        suggestedEmail !== email.value &&
        (
          <p onClick={() => {
            setEmailValue(suggestedEmail)
            setSuggestedEmail(null)
          }}>Did you mean: {suggestedEmail}?</p>
        )}
    </>
  )
};

export default Email;