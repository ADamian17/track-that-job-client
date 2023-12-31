import { FetchWrapper } from "@/services/FetchWrapper";
import {
  JobDataResponseType,
  JobFilterByType,
  JobsType,
  TokenExpiredErrorType,
} from "@/types";
import { apiUrl } from "@/utils";
import { setJobUrlQuery } from "@/utils/setJobUrlQuery";

export type GetAllResponse = JobDataResponseType | TokenExpiredErrorType;
export class Jobs {
  static getAll(
    token: string,
    query: JobFilterByType,
  ): Promise<GetAllResponse> {
    return FetchWrapper.get(apiUrl`/jobs${setJobUrlQuery(query)}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }

  static getOne(token: string, id: string) {
    return FetchWrapper.get(apiUrl`/jobs/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }

  static addOne<T>(token: string, data: T) {
    return FetchWrapper.post(apiUrl`/jobs/newjob`, {
      headers: { authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static edit<T>(token: string, id: string, data: T) {
    return FetchWrapper.put(apiUrl`/jobs/update/${id}`, {
      headers: { authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static delete(token: string, id: string) {
    return FetchWrapper.delete(apiUrl`/jobs/delete/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
