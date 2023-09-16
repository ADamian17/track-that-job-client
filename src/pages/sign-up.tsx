import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { SessionDataType } from "@/types";
import Auth from "@/libs/auth";
import SigninSignupLayout from "@/layouts/SigninSignupLayout";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();


  const handleAuthenticateUser = useCallback(async () => {
    const session = await getSession() as SessionDataType;
    const prevUrlHome = typeof document !== undefined && document.referrer !== "/"

    const isValidJwtToken = (
      session &&
      session?.user?.signedJwt &&
      await Auth.isValidJwtToken(session?.user?.signedJwt) &&
      !prevUrlHome
    );

    if (isValidJwtToken) {
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
    <SigninSignupLayout
      formHeading={'Create your free account'}
      redirectCopy={'Already have an Account?'}
      ctaText={'Sign In'}
      ctaLink={'/sign-in'}
      location="Sign Up"
    >
      Sign Up
    </SigninSignupLayout>
  )
}
