export type SignUpFormActionTrigger = keyof typeof SignUpFormTypes;

export const SignUpFormErrorTypes = {
  "set-firstName": "set-firstName-error",
  "set-lastName": "set-lastName-error",
  "set-profession": "set-profession-error",
  "set-email": "set-email-error",
  "set-password": "set-password-error",
  "set-confirmPassword": "set-confirmPassword-error",
};

export const SignUpFormTypes = {
  ...SignUpFormErrorTypes,
  SET_FIRSTNAME: "SET_FIRSTNAME",
  SET_FIRSTNAME_IS_VALID: "SET_FIRSTNAME_IS_VALID",
  SET_LASTNAME: "SET_LASTNAME",
  SET_LASTNAME_IS_VALID: "SET_LASTNAME_IS_VALID",
  SET_PROFESSION: "SET_PROFESSION",
  SET_PROFESSION_IS_VALID: "SET_PROFESSION_IS_VALID",
  SET_EMAIL: "SET_EMAIL",
  SET_EMAIL_IS_VALID: "SET_EMAIL_IS_VALID",
  SET_PASSWORD: "SET_PASSWORD",
  SET_PASSWORD_IS_VALID: "SET_PASSWORD_IS_VALID",
  SET_CONFIRMPASSWORD: "SET_CONFIRMPASSWORD",
  SET_CONFIRMPASSWORD_IS_VALID: "SET_CONFIRMPASSWORD_IS_VALID",
} as const;
