import { useReducer, useState } from "react";
import { initialState, profileReducer } from "./profileForm.reducer";
import { profileTypes } from "./profileForm.types";
import isEmail from "validator/lib/isEmail";

export default function useProfileForm() {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as keyof typeof profileTypes;
    dispatch({
      type: profileTypes[key],
      payLoad: { value: e.target.value },
    });
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      const key = `set-${e.target.name}-error` as keyof typeof profileTypes;

      dispatch({
        type: profileTypes[key],
        payLoad: { error: true, msg: "This field can not be empty" },
      });
    }
  };

  const handleEmailOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      dispatch({
        type: profileTypes["set-email-error"],
        payLoad: { error: true, msg: "This field can not be empty" },
      });

      return;
    }

    if (e.target.value.length >= 1 && !isEmail(e.target.value)) {
      dispatch({
        type: profileTypes["set-email-error"],
        payLoad: { error: true, msg: "Please enter a valid email" },
      });

      return;
    }
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (state[e.target.name as keyof typeof state].error) {
      const profileTypesKey =
        `set-${e.target.name}-error` as keyof typeof profileTypes;

      dispatch({
        type: profileTypes[profileTypesKey],
        payLoad: { error: false, msg: "" },
      });
    }
  };

  return {
    ...state,
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    handleEmailOnBlur,
  } as const;
}
