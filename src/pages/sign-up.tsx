import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { SessionDataType } from "@/types";
import Auth from "@/libs/auth";
import SigninSignupLayout from "@/layouts/SigninSignupLayout";

export default function SignUp() {
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
