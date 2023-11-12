import { initialState } from "./profileForm.reducer";

export type ProfileReducerAction = {
  type: string;
  payLoad?: { value: string } | { error: boolean; msg: string };
};

export const setValue = (
  state = initialState,
  key: keyof typeof initialState,
  payLoad: ProfileReducerAction["payLoad"],
) => {
  const nextState = {
    ...state,
  };

  if (payLoad && "value" in payLoad) {
    nextState[key] = {
      ...nextState[key],
      value: payLoad?.value,
    };
  }

  return nextState;
};

export const setError = (
  state = initialState,
  key: keyof typeof initialState,
  payLoad: ProfileReducerAction["payLoad"],
) => {
  const nextState = {
    ...state,
  };

  if (payLoad && "error" in payLoad) {
    nextState[key] = {
      ...nextState[key],
      error: payLoad?.error,
    };
  }

  if (payLoad && "msg" in payLoad) {
    nextState[key] = {
      ...nextState[key],
      msg: payLoad?.msg,
    };
  }

  return nextState;
};
