import React from "react";

import Form from "../UI/Form";

type ProfileFormType = {
  isEditPage: boolean | undefined
  password: {
    value: string,
    error: boolean,
    msg: string,
  },
  confirmPassword: {
    value: string,
    error: boolean,
    msg: string,
  },
  handleOnBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  handleOnChange: (e: React.FocusEvent<HTMLInputElement>) => void
  handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void
};


const ProfilePasswordFields: React.FC<ProfileFormType> = ({
  isEditPage = false,
  password,
  confirmPassword,
  handleOnBlur,
  handleOnChange,
  handleOnFocus
}) => (
  <>
    {!isEditPage && (
      <>
        <Form.Input
          error={password?.error}
          errorMsg={password?.msg}
          inputLabel="your password"
          name="password"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          type="password"
          value={password?.value || ""}
          autoComplete="on"
        />

        <Form.Input
          error={confirmPassword?.error}
          errorMsg={confirmPassword?.msg}
          inputLabel="confirm password"
          name="confirmPassword"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          type="password"
          value={confirmPassword?.value || ""}
          autoComplete="on"
        />
      </>
    )}
  </>
)

export default ProfilePasswordFields;