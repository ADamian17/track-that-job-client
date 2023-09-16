export const apiUrl = (
  string: TemplateStringsArray,
  query?: string
): string => {
  const url: string =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';
  let formatedUrl: string = `${url}${string[0]}`;

  if (query) {
    return formatedUrl + query;
  }

  return formatedUrl;
};

export const jobsFilters = [
  {
    text: 'All',
    href: '/',
  },
  {
    text: 'Completed',
    href: '?filterBy=completed',
  },
  {
    text: 'applied',
    href: '?filterBy=applied',
  },
  {
    text: 'Rejected',
    href: '?filterBy=rejected',
  },
  {
    text: 'No response',
    href: '?filterBy=no_response',
  },
  {
    text: 'In progress',
    href: '?filterBy=in_progress',
  },
];
