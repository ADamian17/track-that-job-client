export const fieldsAreValid = (
  fields: Record<string, any>,
  cb: (isValidFields: boolean) => void,
) => {
  let isValidFields = true;

  for (const field in fields) {
    isValidFields = isValidFields && fields[field]?.isValid;
  }

  return cb(isValidFields);
};
