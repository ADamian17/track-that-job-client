export const apiUrl = (string: TemplateStringsArray) => {
  const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';
  return `${url}${string[0]}`;
};

export const jobsFilters = [
  {
    text: 'All',
    href: '/dashboard',
  },
  {
    text: 'applied',
    href: '/dashboard?filterBy=applied',
  },
  {
    text: 'Complete',
    href: '/dashboard?filterBy=complete',
  },
  {
    text: 'Rejected',
    href: '/dashboard?filterBy=rejected',
  },
  {
    text: 'No response',
    href: '/dashboard?filterBy=no_response',
  },
  {
    text: 'In progress',
    href: '/dashboard?filterBy=in_progress',
  },
];
