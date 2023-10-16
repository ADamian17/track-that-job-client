export const fieldsAreValid = (
  fields: Record<string, any>,
  fieldsTarget: string[],
) => {
  let isValidFields = true;

  fieldsTarget.forEach((field) => {
    isValidFields = isValidFields && fields[field]?.isValid;
  });

  return isValidFields;
};
