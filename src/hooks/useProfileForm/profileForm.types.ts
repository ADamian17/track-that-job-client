const profileErrorTypes = {
  "set-confirmPassword-error": "set-confirmPassword-error",
  "set-email-error": "set-email-error",
  "set-firstName-error": "set-firstName-error",
  "set-lastName-error": "set-lastName-error",
  "set-password-error": "set-password-error",
  "set-profession-error": "set-profession-error",
} as const;

export const profileTypes = {
  confirmPassword: "confirmPassword",
  email: "email",
  firstName: "firstName",
  lastName: "lastName",
  password: "password",
  profession: "profession",
  ...profileErrorTypes,
} as const;
