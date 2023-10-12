import { create } from "zustand";

type FieldError = {
  error: boolean;
  msg: string;
};

export type UseFormFieldsState = typeof initialState;
export type UseFormField = keyof UseFormFieldsState;

type UseFormFieldsStoreActions = {
  setFieldError: (field: UseFormField, fieldError: FieldError) => void;
  setFieldValue: (field: UseFormField, val: string) => void;
  setValidField: (field: UseFormField, val: boolean) => void;
};

const initialState = {
  firstName: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  lastName: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  email: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  password: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  confirmPassword: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
  profession: {
    error: false,
    isValid: false,
    msg: "",
    value: "",
  },
} as const;

const useFormFieldsStore = create<
  UseFormFieldsState & UseFormFieldsStoreActions
>((set) => ({
  ...initialState,
  setFieldValue: (field, val) => {
    set((state) => ({
      ...state,
      [field]: {
        ...state[field],
        value: val,
      },
    }));
  },
  setValidField: (field, val) => {
    set((state) => ({
      ...state,
      [field]: {
        ...state[field],
        isValid: val,
      },
    }));
  },
  setFieldError: (field, fieldError) => {
    set((state) => ({
      ...state,
      [field]: {
        ...state[field],
        ...fieldError,
      },
    }));
  },
}));

export default useFormFieldsStore;
