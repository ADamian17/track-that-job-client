import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';

import ContainerWhite from "@/components/UI/ContainerWhite";

import styles from "./SignInContainer.module.scss";

type LoginFormContainerType = {};

const SignInContainer: React.FC<LoginFormContainerType> = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res?.ok) {
        setLoading(false);
        router.replace('/')
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <ContainerWhite>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="sign in" />
      </form>
    </ContainerWhite>
  )
};

export default SignInContainer;