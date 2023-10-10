import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { SessionDataType } from "@/types";
import Auth from "@/libs/auth";
import SignInContainer from "@/containers/SignInContainer";
import SigninSignupLayout from "@/layouts/SigninSignupLayout";

export default function Signin() {
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
      formHeading={'Sign in to your account'}
      redirectCopy={`Don't have an account?`}
      ctaText={'Sign Up'}
      ctaLink={'/sign-up'}
      location="Sign In"
    >
      <SignInContainer />
    </SigninSignupLayout>
  )
}
