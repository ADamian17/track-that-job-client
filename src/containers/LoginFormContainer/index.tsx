import React, { useState } from "react";

import styles from "./LoginFormContainer.module.scss";
import { useRouter } from "next/router";
import useAuthStore from "@/zustand/authStore";
import { apiUrl } from "@/utils";
import Auth from "@/libs/auth";

type LoginFormContainerType = {};

const LoginFormContainer: React.FC<LoginFormContainerType> = (props) => {
  const router = useRouter();
  const setCurrentUser = useAuthStore(state => state.setCurrentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { signedJwt } = await Auth.signin({ email, password });
      setCurrentUser(signedJwt);
      setLoading(false);
      router.push('/');
      setEmail('');
      setPassword('');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="submit" value="sign in" />
    </form>
  )
};

export default LoginFormContainer;