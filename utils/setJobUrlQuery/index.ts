export const setJobUrlQuery = (query: Record<string, string>): string => {
  if (query && 'filterBy' in query) {
    return `?job_status=${query.filterBy}`;
  }

  return '/';
};
