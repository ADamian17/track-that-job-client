import {
  FormDataKeyType,
  FormDataType,
  formData,
} from "@/utils/constants/formData";
import isEmpty from "validator/lib/isEmpty";
import { create } from "zustand";

type FieldError = {
  error: boolean;
  msg: string;
};

type UseFormFieldsStoreActions = {
  setFieldError: (field: FormDataKeyType, fieldError: FieldError) => void;
  setFieldValue: (field: FormDataKeyType, val: string) => void;
  setValidField: (field: FormDataKeyType, val: boolean) => void;
};

const useFormFieldsStore = create<FormDataType & UseFormFieldsStoreActions>(
  (set) => ({
    ...formData,
    setFieldValue: (field, val) => {
      set((state) => ({
        ...state,
        [field]: {
          ...state[field],
          value: val,
          isValid: !isEmpty(val),
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
  }),
);

export default useFormFieldsStore;
