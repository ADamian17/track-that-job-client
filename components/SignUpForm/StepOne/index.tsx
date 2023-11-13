import isEmpty from "validator/lib/isEmpty";

import { FormDataKeyType } from "@/utils/constants/formData";
import Form from "@/components/UI/Form";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";

const StepOne: React.FC = () => {
  const {
    firstName,
    lastName,
    profession,
    setFieldError,
    setFieldValue,
    setValidField
  } = useFormFieldsStore(state => state)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (isEmpty(value)) {
      setFieldError(name as FormDataKeyType, { error: true, msg: "This field can not be empty" })
      setValidField(name as FormDataKeyType, false)
      return
    }

    setFieldError(name as FormDataKeyType, { error: false, msg: "" })
    setValidField(name as FormDataKeyType, true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (profession.error || firstName.error || lastName.error) {
      setFieldError(name as FormDataKeyType, { error: false, msg: "" });
    }

    setFieldValue(name as FormDataKeyType, value)
  }

  return (
    <>
      <Form.Input
        data-testid="sign-up-form-first-name"
        error={firstName?.error}
        errorMsg={firstName?.msg}
        inputLabel="your first Name"
        name="firstName"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g John"
        value={firstName?.value || ""}
      />

      <Form.Input
        data-testid="sign-up-form-last-name"
        error={lastName?.error}
        errorMsg={lastName?.msg}
        inputLabel="your last Name"
        name="lastName"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g Doe"
        value={lastName?.value || ""}
      />

      <Form.Input
        data-testid="sign-up-form-profession"
        inputLabel="your profession"
        name="profession"
        error={profession?.error}
        errorMsg={profession?.msg}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="e.g driver"
        value={profession?.value || ""}
      />
    </>
  )
};

export default StepOne;
