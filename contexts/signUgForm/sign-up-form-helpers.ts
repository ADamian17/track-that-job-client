import { FormDataKeyType } from "../../utils/constants/formData";
import { FormDataType } from "../../utils/constants/formData";

export type SignUpFormReducerAction = {
  type: string;
  payload?:
    | { value: string }
    | { isValid: boolean }
    | { error: boolean; msg: string };
};

export const updateState = <T>(
  state: T,
  key: keyof T,
  payload: SignUpFormReducerAction["payload"],
) => {
  const nextState = {
    ...state,
  };

  if (payload && "value" in payload) {
    nextState[key] = {
      ...nextState[key],
      value: payload?.value,
    };

    return nextState;
  }

  if (payload && "isValid" in payload) {
    nextState[key] = {
      ...nextState[key],
      isValid: payload?.isValid,
    };

    return nextState;
  }

  if (payload && "error" in payload && "msg" in payload) {
    nextState[key] = {
      ...nextState[key],
      error: payload?.error,
      msg: payload?.msg,
    };

    return nextState;
  }

  return state;
};
