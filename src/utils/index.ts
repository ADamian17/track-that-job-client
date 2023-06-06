export const apiUrl = (string: TemplateStringsArray) => {
  const url = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';
  return `${url}${string[0]}`;
};
