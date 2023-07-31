import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import LoginFormContainer from "@/containers/LoginFormContainer";
import { SessionDataType } from "@/types";
import Auth from "@/libs/auth";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleAuthenticateUser = useCallback(async () => {
    const session = await getSession() as SessionDataType;
    const jwtToken = session?.user?.signedJwt;
    const data = await Auth.checkJwtToken(jwtToken!);
    const isValid = session && data.status !== 401

    if (isValid) {
      router.replace('/')
    } else {
      setIsLoading(false)
    }
  }, [router])

  useEffect(() => {
    handleAuthenticateUser();
  }, [handleAuthenticateUser])


  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <LoginFormContainer />
  )
}