import { setJobUrlQuery } from '..';

describe('setJobUrlQuery util', () => {
  it('should not set any url query and return (/)', () => {
    expect(setJobUrlQuery({})).toBe('/');
  });
  it('should set url query to be (?job_status=applied)', () => {
    expect(setJobUrlQuery({ filterBy: 'applied' })).toBe('?job_status=applied');
  });
});
