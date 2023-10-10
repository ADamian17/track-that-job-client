import { profileTypes } from "./profileForm.types";
import { ProfileReducerAction, setError, setValue } from "./profileFormUtils";

export const initialState = {
  firstName: {
    value: "",
    error: false,
    msg: "",
  },
  lastName: {
    value: "",
    error: false,
    msg: "",
  },
  email: {
    value: "",
    error: false,
    msg: "",
  },
  password: {
    value: "",
    error: false,
    msg: "",
  },
  confirmPassword: {
    value: "",
    error: false,
    msg: "",
  },
  profession: {
    value: "",
    error: false,
    msg: "",
  },
};

export function profileReducer(
  state = initialState,
  action: ProfileReducerAction,
) {
  switch (action.type) {
    case profileTypes.firstName:
      return setValue(state, profileTypes.firstName, action?.payLoad);
    case profileTypes.lastName:
      return setValue(state, profileTypes.lastName, action?.payLoad);
    case profileTypes.email:
      return setValue(state, profileTypes.email, action?.payLoad);
    case profileTypes.password:
      return setValue(state, profileTypes.password, action?.payLoad);
    case profileTypes.confirmPassword:
      return setValue(state, profileTypes.confirmPassword, action?.payLoad);
    case profileTypes.profession:
      return setValue(state, profileTypes.profession, action?.payLoad);
    case profileTypes["set-firstName-error"]:
      return setError(state, profileTypes.firstName, action?.payLoad);
    case profileTypes["set-lastName-error"]:
      return setError(state, profileTypes.lastName, action?.payLoad);
    case profileTypes["set-email-error"]:
      return setError(state, profileTypes.email, action?.payLoad);
    case profileTypes["set-password-error"]:
      return setError(state, profileTypes.password, action?.payLoad);
    case profileTypes["set-confirmPassword-error"]:
      return setError(state, profileTypes.confirmPassword, action?.payLoad);
    case profileTypes["set-profession-error"]:
      return setError(state, profileTypes.profession, action?.payLoad);
    default:
      return state;
  }
}
