import { create } from "zustand";

import StepOne from "@/components/SignUpForm/StepOne";
import StepTwo from "@/components/SignUpForm/StepTwo";

type UseFormStepsStoreState = { currentStep: "one" | "two" } & Record<
  "one" | "two",
  { completed: boolean; component: React.FC<{}>; completedFields: 0 }
>;

type UseFormStepsStoreActions = {
  next: () => void;
  previous: () => void;
  setStepToComplete: (
    step: UseFormStepsStoreState["currentStep"],
    val: boolean,
  ) => void;
};

const initialState = {
  currentStep: "one",
  one: {
    component: StepOne,
    completed: false,
    completedFields: 0,
  },
  two: {
    completed: false,
    component: StepTwo,
    completedFields: 0,
  },
} satisfies UseFormStepsStoreState;

const useFormStepsStore = create<
  UseFormStepsStoreState & UseFormStepsStoreActions
>((set, get) => ({
  ...initialState,
  next: () => {
    const isCompleted = get()["one"].completed;

    if (isCompleted) {
      set({ currentStep: "two" });
    }
  },
  previous: () => set({ currentStep: "one" }),
  setStepToComplete: (step, val) => {
    set((state) => ({
      [step]: {
        ...state[step],
        completed: val,
      },
    }));
  },
}));

export default useFormStepsStore;
