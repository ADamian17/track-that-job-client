import { FetchWrapper } from '@/services/FetchWrapper';
import { JobsType } from '@/types';
import { apiUrl } from '@/utils';

type GetAllResponse = {
  status: number;
  count: number;
  jobs: JobsType;
};

export class Jobs {
  static getAll(token: string): Promise<GetAllResponse> {
    return FetchWrapper.get(apiUrl`/jobs`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
