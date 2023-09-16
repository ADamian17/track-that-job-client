import { apiUrl } from '@/utils';
import { FetchWrapper } from '@/services/FetchWrapper';
import { UserResponseType } from '@/types';

export class User {
  static get(token: string): Promise<UserResponseType> {
    return FetchWrapper.get(apiUrl`/users/profile`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }

  static edit(token: string): Promise<Response> {
    return FetchWrapper.put(apiUrl`/users/update`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }

  static delete(token: string): Promise<Response> {
    return FetchWrapper.delete(apiUrl`/users/delete`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
