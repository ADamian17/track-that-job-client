export type FormDataType = typeof formData;
export type FormDataKeyType = keyof FormDataType;

export const formData = {
  firstName: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  lastName: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  email: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  password: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  confirmPassword: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  profession: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
};
