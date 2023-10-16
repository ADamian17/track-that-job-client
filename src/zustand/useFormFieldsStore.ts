import {
  FormDataKeyType,
  FormDataType,
  formData,
} from "@/utils/constants/formData";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isStrongPassword from "validator/lib/isStrongPassword";
import { create } from "zustand";

type FieldError = {
  error: boolean;
  msg: string;
};

type UseFormFieldsStoreActions = {
  setFieldError: (field: FormDataKeyType, fieldError: FieldError) => void;
  setFieldValue: (field: FormDataKeyType, value: string) => void;
  setValidField: (field: FormDataKeyType, isValid: boolean) => void;
  setEmailValue: (value: string) => void;
  setPasswordValue: (value: string) => void;
  setConfirmPasswordValue: (value: string) => void;
};

const useFormFieldsStore = create<FormDataType & UseFormFieldsStoreActions>(
  (set, get) => ({
    ...formData,
    setFieldValue: (field, value) => {
      set((state) => ({
        [field]: {
          ...state[field],
          value,
          isValid: !isEmpty(value),
        },
      }));
    },
    setEmailValue: (value) => {
      set((state) => ({
        email: {
          ...state.email,
          value,
          isValid: isEmail(value),
        },
      }));
    },
    setPasswordValue: (value) => {
      set((state) => ({
        password: {
          ...state.password,
          value,
          isValid: isStrongPassword(value),
        },
      }));
    },
    setConfirmPasswordValue: (value) => {
      const isValid = get().password.value === value;
      set((state) => ({
        confirmPassword: {
          ...state.confirmPassword,
          value,
          isValid,
        },
      }));
    },
    setValidField: (field, isValid) => {
      set((state) => ({
        [field]: {
          ...state[field],
          isValid,
        },
      }));
    },
    setFieldError: (field, fieldError) => {
      set((state) => ({
        [field]: {
          ...state[field],
          ...fieldError,
        },
      }));
    },
  }),
);

export default useFormFieldsStore;
