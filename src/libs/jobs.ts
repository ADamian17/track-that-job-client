import { FetchWrapper } from '@/services/FetchWrapper';
import { JobDataResponseType, JobsType, TokenExpiredErrorType } from '@/types';
import { apiUrl } from '@/utils';

export type GetAllResponse = JobDataResponseType | TokenExpiredErrorType;

export class Jobs {
  static getAll(token: string): Promise<GetAllResponse> {
    return FetchWrapper.get(apiUrl`/jobs`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
