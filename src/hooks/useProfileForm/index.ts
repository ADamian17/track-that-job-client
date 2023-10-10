import { useReducer, useState } from "react";
import { useRouter } from "next/router";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

import { initialState, profileReducer } from "./profileForm.reducer";
import { profileTypes } from "./profileForm.types";
import Auth from "@/libs/auth";

export default function useProfileForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const validateFields = () => {
    let hasErrors = false;

    for (const key in state) {
      const value = state[key as keyof typeof state].value;
      if (key === "email" && !isEmail(value)) {
        const errorKey = `set-${key}-error` as keyof typeof profileTypes;

        dispatch({
          type: profileTypes[errorKey],
          payLoad: { error: true, msg: "Please enter a valid email" },
        });

        hasErrors = true;
      }
      if (isEmpty(value)) {
        const errorKey = `set-${key}-error` as keyof typeof profileTypes;

        dispatch({
          type: profileTypes[errorKey],
          payLoad: { error: true, msg: "This field can not be empty" },
        });

        hasErrors = true;
      }
    }

    return hasErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const hasErrors = validateFields();

      if (hasErrors) return;
      setLoading(true);

      const data = {
        first_name: state.firstName.value,
        last_name: state.lastName.value,
        email: state.email.value,
        password: state.password.value,
        profession: state.profession.value,
      };

      const res = await Auth.signup(data);

      if (res.status === 201) {
        setLoading(false);
        router.replace("/sign-in/");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    ...state,
    handleEmailOnBlur,
    handleOnBlur,
    handleOnChange,
    handleOnFocus,
    handleSubmit,
    loading,
  } as const;
}
