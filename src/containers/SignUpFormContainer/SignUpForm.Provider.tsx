import { createContext, useContext, useReducer } from "react";
import { FormDataKeyType, FormDataType, formData } from "@/utils/constants/formData";
import { signUpFormReducer } from "@/contexts/signUgForm/signUgForm.reducer";
import { SignUpFormActionTrigger, SignUpFormTypes } from "@/contexts/signUgForm/signUgForm.types";
import isEmpty from "validator/lib/isEmpty";

type SignUpFormCtxType = {
  signUpFormData: FormDataType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type SignUpFormProviderType = {
  children: React.ReactNode
}

export const SignUpFormCtx = createContext<SignUpFormCtxType>({} as SignUpFormCtxType)

export const useSignUpForm = () => useContext(SignUpFormCtx);

export const SignUpFormProvider: React.FC<SignUpFormProviderType> = ({ children }) => {
  const [signUpFormData, dispatch] = useReducer(signUpFormReducer, formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (signUpFormData[name as FormDataKeyType]?.error) {
      console.log(signUpFormData[name as FormDataKeyType]);
    }

    dispatch({
      type: SignUpFormTypes[`SET_${name.toUpperCase()}` as SignUpFormActionTrigger],
      payload: {
        value
      }
    });

    if (!isEmpty(value)) {
      dispatch({
        type: SignUpFormTypes[`SET_${name as FormDataKeyType}_IS_VALID` as SignUpFormActionTrigger],
        payload: {
          isValid: true,
        }
      });
    } else {
      dispatch({
        type: SignUpFormTypes[`SET_${name as FormDataKeyType}_IS_VALID` as SignUpFormActionTrigger],
        payload: {
          isValid: false,
        }
      });
    }

    // const isAllFieldsValid = fieldsAreValid({ firstName, lastName, profession });

    // if (isAllFieldsValid) {
    //   console.log({ isAllFieldsValid });
    //   setIsDisable(false)
    // } else {
    //   console.log({ isAllFieldsValid });
    //   setIsDisable(true)
    // }
  }

  const value = {
    signUpFormData,
    handleChange
  }

  return (
    <SignUpFormCtx.Provider value={value}>
      {children}
    </SignUpFormCtx.Provider>
  )
}