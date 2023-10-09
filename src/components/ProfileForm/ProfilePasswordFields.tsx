import React from "react";

import Form from "../UI/Form";
import useProfileForm from "@/hooks/useProfileForm";

type ProfileFormType = {
  isEditPage: boolean | undefined
};


const ProfilePasswordFields: React.FC<ProfileFormType> = ({ isEditPage = false }) => {
  const {
    password,
    confirmPassword,
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
  } = useProfileForm();

  return (
    <>
      {!isEditPage && (
        <>
          <Form.Input
            error={password.error}
            errorMsg={password.msg}
            inputLabel="your password"
            name="password"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            value={password.value}
          />

          <Form.Input
            error={confirmPassword.error}
            errorMsg={confirmPassword.msg}
            inputLabel="confirm password"
            name="confirmPassword"
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            value={confirmPassword.value}
          />
        </>
      )}
    </>
  )
};

export default ProfilePasswordFields;