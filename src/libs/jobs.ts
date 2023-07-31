import { FetchWrapper } from '@/services/FetchWrapper';
import {
  JobDataResponseType,
  JobFilterByType,
  JobsType,
  TokenExpiredErrorType,
} from '@/types';
import { apiUrl } from '@/utils';

export type GetAllResponse = JobDataResponseType | TokenExpiredErrorType;
export class Jobs {
  static getAll(
    token: string,
    query: JobFilterByType
  ): Promise<GetAllResponse> {
    const filterBy =
      query && query.filterBy ? `?job_status=${query.filterBy}` : `/`;
    return FetchWrapper.get(apiUrl`/jobs${filterBy}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
