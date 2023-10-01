import { createContext, useContext, useState } from "react";
import { UserDataType } from "@/types";

type ProfileCtxType = {
  userData: UserDataType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserDataType>>;
}

type ProfileProviderProps = {
  children: React.ReactNode
  currentUser: UserDataType
}

export const ProfileCtx = createContext<ProfileCtxType>({} as ProfileCtxType)

export const useProfile = () => useContext(ProfileCtx);

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children, currentUser }) => {
  const [userData, setCurrentUser] = useState<UserDataType>(currentUser)

  const value = {
    userData,
    setCurrentUser
  }

  return (
    <ProfileCtx.Provider value={value}>
      {children}
    </ProfileCtx.Provider>
  )
}