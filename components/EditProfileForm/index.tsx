import React, { useState } from "react";
import { useRouter } from "next/router";

import { UserDataType } from "@/types";
import Button from "../UI/Buttons/Button";
import ButtonsGroup from "../UI/Buttons/ButtonsGroup";
import Form from "../UI/Form";
import useProfileForm from "@/hooks/useProfileForm";

type ProfileFormType = {
  userData?: UserDataType["user"]
};


const EditProfileForm: React.FC<ProfileFormType> = ({ userData }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const {
    firstName,
    lastName,
    profession,
    email,
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    handleEmailOnBlur,
  } = useProfileForm();

  return (
    <Form>
      <Form.Input
        error={firstName?.error}
        errorMsg={firstName?.msg}
        inputLabel="your first Name"
        name="firstName"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={firstName?.value || userData?.first_name || ""}
      />

      <Form.Input
        error={lastName?.error}
        errorMsg={lastName?.msg}
        inputLabel="your last Name"
        name="lastName"
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={lastName?.value || userData?.last_name || ""}
        onBlur={handleOnBlur}
      />


      <Form.Input
        error={email?.error}
        errorMsg={email?.msg}
        inputLabel="your email"
        name="email"
        onBlur={handleEmailOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        placeholder="e.g johndoe@gmail.com"
        value={email?.value || userData?.email || ""}
      />

      <Form.Input
        error={profession?.error}
        errorMsg={profession?.msg}
        inputLabel="your profession"
        name="profession"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        value={profession?.value || userData?.profession || ""}
      />

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
          isLoading={loading}
        />
      </ButtonsGroup>
    </Form>
  )
};

export default EditProfileForm;
