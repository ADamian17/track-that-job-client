import { formData } from "@/utils/constants/formData";
import { SignUpFormTypes } from "./signUgForm.types";
import { SignUpFormReducerAction, updateState } from "./sign-up-form-helpers";

export function signUpFormReducer(
  state = formData,
  action: SignUpFormReducerAction,
) {
  switch (action.type) {
    case SignUpFormTypes.SET_FIRSTNAME:
      return updateState(state, "firstName", action?.payload);
    case SignUpFormTypes.SET_FIRSTNAME_IS_VALID:
      return updateState(state, "firstName", action?.payload);
    case SignUpFormTypes.SET_LASTNAME:
      return updateState(state, "lastName", action?.payload);
    case SignUpFormTypes.SET_LASTNAME_IS_VALID:
      return updateState(state, "lastName", action?.payload);
    case SignUpFormTypes.SET_PROFESSION:
      return updateState(state, "profession", action?.payload);
    case SignUpFormTypes.SET_PROFESSION_IS_VALID:
      return updateState(state, "profession", action?.payload);
    default:
      return state;
  }
}
