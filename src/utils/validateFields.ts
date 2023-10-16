import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

export const validateFields = (
  fields: Record<string, any>,
  dispatchTypes: Record<string, string>,
  dispatch: (value: any) => void,
) => {
  let hasErrors = false;

  for (const key in fields) {
    const value = fields[key as keyof typeof fields].value;
    if (key === "email" && !isEmail(value)) {
      const errorKey = `set-${key}-error` as keyof typeof dispatchTypes;

      dispatch({
        type: dispatchTypes[errorKey],
        payLoad: { error: true, msg: "Please enter a valid email" },
      });

      hasErrors = true;
    }

    if (isEmpty(value)) {
      const errorKey = `set-${key}-error` as keyof typeof dispatchTypes;

      dispatch({
        type: dispatchTypes[errorKey],
        payLoad: { error: true, msg: "This field can not be empty" },
      });

      hasErrors = true;
    }
  }

  return hasErrors;
};
