import { apiUrl } from "@/utils";
import { FetchWrapper } from "@/services/FetchWrapper";
import { UserResponseType } from "@/types";

export class User {
  static get(token: string): Promise<UserResponseType> {
    return FetchWrapper.get(apiUrl`/users/profile`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }

  static edit(token: string, data: any): Promise<Response> {
    return FetchWrapper.put(apiUrl`/users/update`, {
      headers: { authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static updateImg(token: string, newImage: string) {
    return FetchWrapper.put(apiUrl`/users/addprofileimg`, {
      headers: { authorization: `Bearer ${token}` },
      body: JSON.stringify({
        profile_image: newImage,
      }),
    }).then((res) => res.json());
  }

  static delete(token: string): Promise<Response> {
    return FetchWrapper.delete(apiUrl`/users/delete`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }
}
