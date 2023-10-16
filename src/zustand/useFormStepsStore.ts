import { create } from "zustand";

import StepOne from "@/components/SignUpForm/StepOne";
import StepTwo from "@/components/SignUpForm/StepTwo";

type UseFormStepsStoreState = typeof initialState;

type UseFormStepsStoreActions = {
  next: () => void;
  previous: () => void;
  setIsDisable: (val: boolean) => void;
};

const initialState = {
  currentStep: 0,
  isDisable: true,
  steps: [
    {
      comp: StepOne,
      fields: ["firstName", "lastName", "profession"],
    },
    {
      comp: StepTwo,
      fields: ["email", "password", "confirmPassword"],
    },
  ],
};

const useFormStepsStore = create<
  UseFormStepsStoreState & UseFormStepsStoreActions
>((set) => ({
  ...initialState,
  next: () => {
    set((state) => {
      if (state.currentStep >= state.steps.length - 1) {
        return {
          currentStep: state.currentStep,
        };
      }

      return {
        currentStep: state.currentStep + 1,
        isDisable: true,
      };
    });
  },
  previous: () => {
    set((state) => {
      if (state.currentStep <= 0) {
        return { currentStep: state.currentStep };
      }

      return {
        currentStep: state.currentStep - 1,
        isDisable: false,
      };
    });
  },
  setIsDisable: (val) => set({ isDisable: val }),
}));

export default useFormStepsStore;
