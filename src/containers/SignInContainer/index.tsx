import React, { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";

import Button from "@/components/UI/Buttons/Button";
import Form from "@/components/UI/Form";

type LoginFormContainerType = {};

const SignInContainer: React.FC<LoginFormContainerType> = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (email.trim() === "") {
        setEmailError(true)
        setLoading(false);
        return;
      }

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
    <Form onSubmit={handleSubmit}>
      <Form.EmailInput
        inputLabel="Your Email"
        placeholder="e.g johndoe@gmail.com"
        value={email}
        setEmail={setEmail}
        error={emailError}
      />

      <Form.Input
        inputLabel="Your Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
      />

      <Button
        type="submit"
        text={"sign in"}
        variant="is-primary"
        isLoading={loading}
      />
    </Form>
  )
};

export default SignInContainer;