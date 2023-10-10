import { FetchWrapper } from "@/services/FetchWrapper";
import { TokenExpiredErrorType } from "@/types";
import { apiUrl } from "@/utils";

type UserDataType = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profession: string;
};

type SigninDataType = Pick<UserDataType, "email" | "password">;
type SignUpResponse = {
  status: number;
  message: string;
  user: {
    email: string;
    password: string;
  };
  requestedAt: string;
};

class Auth {
  static signin(data: SigninDataType) {
    return FetchWrapper.post(apiUrl`/auth/login`, {
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static isValidJwtToken(
    token: string | undefined | null,
  ): Promise<boolean> | null {
    if (!token) return null;

    return FetchWrapper.get(apiUrl`/auth/validate-token`, {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => (data.status !== 401 ? true : false));
  }

  static signup(data: UserDataType): Promise<SignUpResponse> {
    return FetchWrapper.post(apiUrl`/auth/register`, {
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
}

export default Auth;
