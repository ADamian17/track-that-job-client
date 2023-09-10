import { FetchWrapper } from '@/services/FetchWrapper';
import {
  JobDataResponseType,
  JobFilterByType,
  JobsType,
  TokenExpiredErrorType,
} from '@/types';
import { apiUrl } from '@/utils';
import { setJobUrlQuery } from '@/utils/setJobUrlQuery';

export type GetAllResponse = JobDataResponseType | TokenExpiredErrorType;
export class Jobs {
  static getAll(
    token: string,
    query: JobFilterByType
  ): Promise<GetAllResponse> {
    return FetchWrapper.get(apiUrl`/jobs${setJobUrlQuery(query)}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
