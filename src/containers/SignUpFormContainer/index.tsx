import React, { useEffect } from "react";

import Form from "@/components/UI/Form";
import useFormStepsStore from "@/zustand/useFormStepsStore";
import { SignUpFormProvider } from "./SignUpForm.Provider";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";

const SignUpFormContainer: React.FC = (props) => {
  const { currentStep, steps, next, previous, isDisable, setIsDisable } = useFormStepsStore(state => state)
  const state = useFormFieldsStore(state => state)

  const Step = steps[currentStep].comp;
  const firstStep = currentStep === 0;
  const lastStep = currentStep === steps.length - 1;

  useEffect(() => {
    if (fieldsAreValid(state, steps[currentStep].fields)) {
      setIsDisable(false)
    } else {
      setIsDisable(true)
    }
  }, [state, steps, currentStep, setIsDisable])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!isDisable) return next();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SignUpFormProvider>
      <Form onSubmit={handleSubmit}>
        <Step />

        <Form.Controllers
          previous={previous}
          firstStep={firstStep}
          isDisable={isDisable}
          lastStep={lastStep}
        />

        <Form.Indicators
          steps={steps}
          currentStep={currentStep}
        />
      </Form>
    </SignUpFormProvider>
  )
};

export default SignUpFormContainer;
