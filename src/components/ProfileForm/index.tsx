import React from "react";

import Button from "../UI/Buttons/Button";
import Form from "../UI/Form";
import useProfileForm from "@/hooks/useProfileForm";
import ButtonsGroup from "../UI/Buttons/ButtonsGroup";
import { useRouter } from "next/router";
import { UserDataType } from "@/types";

type ProfileFormType = {
  isEditPage?: boolean
  userData?: UserDataType["user"]
};


const ProfileForm: React.FC<ProfileFormType> = ({ isEditPage = false, userData }) => {
  const router = useRouter();
  const {
    firstName,
    lastName,
    profession,
    email,
    password,
    confirmPassword,
    handleOnChange
  } = useProfileForm();

  const btnOpts = {
    false: <Button
      text="sign up"
      type="submit"
      variant="is-primary"
    />,
    true: (
      <ButtonsGroup>
        <Button
          onClick={() => router.back()}
          text="cancel"
          type="button"
          variant="is-info"
        />
        <Button
          text="submit"
          type="submit"
          variant="is-primary"
        />
      </ButtonsGroup>
    )
  } as const;

  const FormBtn = btnOpts[`${isEditPage}`]

  const passwordFields = !isEditPage && (
    <>
      <Form.Input
        error={password.error}
        inputLabel="your password"
        name="password"
        onChange={handleOnChange}
        value={password.value}
      />

      <Form.Input
        error={confirmPassword.error}
        inputLabel="confirm password"
        name="confirmPassword"
        onChange={handleOnChange}
        value={confirmPassword.value}
      />
    </>
  )

  return (
    <Form>
      <Form.Input
        error={firstName.error}
        inputLabel="your first Name"
        name="firstName"
        onChange={handleOnChange}
        value={firstName.value || userData?.first_name}
      />

      <Form.Input
        error={lastName.error}
        inputLabel="your last Name"
        name="lastName"
        onChange={handleOnChange}
        value={lastName.value || userData?.last_name}
      />

      <Form.Input
        error={email.error}
        inputLabel="your email"
        name="email"
        onChange={handleOnChange}
        placeholder="e.g johndoe@gmail.com"
        value={email.value || userData?.email}
        type="email"
      />

      {passwordFields}

      <Form.Input
        error={profession.error}
        inputLabel="your profession"
        name="profession"
        onChange={handleOnChange}
        value={profession.value || userData?.profession}
      />

      {FormBtn}
    </Form>
  )
};

export default ProfileForm;