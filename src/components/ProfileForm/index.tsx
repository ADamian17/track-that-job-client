import React from "react";

import Button from "../UI/Buttons/Button";
import Form from "../UI/Form";
import useProfileForm from "@/hooks/useProfileForm";
import ButtonsGroup from "../UI/Buttons/ButtonsGroup";
import { useRouter } from "next/router";
import { UserDataType } from "@/types";
import ProfilePasswordFields from "./ProfilePasswordFields";
import ProfileFormBtn from "./ProfileFormBtn";

type ProfileFormType = {
  isEditPage?: boolean
  userData?: UserDataType["user"]
};


const ProfileForm: React.FC<ProfileFormType> = ({ isEditPage = false, userData }) => {
  const {
    firstName,
    lastName,
    profession,
    email,
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    handleEmailOnBlur
  } = useProfileForm();

  return (
    <Form>
      <Form.Input
        error={firstName.error}
        errorMsg={firstName.msg}
        inputLabel="your first Name"
        name="firstName"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={firstName.value || userData?.first_name}
      />

      <Form.Input
        error={lastName.error}
        errorMsg={lastName.msg}
        inputLabel="your last Name"
        name="lastName"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={lastName.value || userData?.last_name}
        onBlur={handleOnBlur}
      />


      <Form.Input
        error={email.error}
        errorMsg={email.msg}
        inputLabel="your email"
        name="email"
        onBlur={handleEmailOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        placeholder="e.g johndoe@gmail.com"
        type="email"
        value={email.value || userData?.email || ""}
      />

      <ProfilePasswordFields isEditPage={isEditPage} />

      <Form.Input
        error={profession.error}
        errorMsg={profession.msg}
        inputLabel="your profession"
        name="profession"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={profession.value || userData?.profession}
      />

      <ProfileFormBtn isEditPage={isEditPage} />
    </Form>
  )
};

export default ProfileForm;
