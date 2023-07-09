import ADFetch from '@/services/ADFetch';
import { apiUrl } from '@/utils';

type UserDataType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
  profession: string;
};

type SigninDataType = Pick<UserDataType, 'email' | 'password'>;

class Auth {
  static signin(data: SigninDataType) {
    return ADFetch.post(apiUrl`/auth/login`, data).then((res) => res.json());
  }

  static signup(data: UserDataType) {
    return ADFetch.post(apiUrl`/auth/register`, data).then((res) => res.json());
  }
}

export default Auth;