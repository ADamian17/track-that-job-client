import React from "react";

import Form from "@/components/UI/Form";
import useFormStepsStore from "@/zustand/useFormStepsStore";

const SignUpFormContainer: React.FC = (props) => {
  const { currentStep, steps, next, previous, isDisable } = useFormStepsStore(state => state)

  const Step = steps[currentStep];
  const firstStep = currentStep === 0;
  const lastStep = currentStep === steps.length - 1;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!isDisable) return next();
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
  )
};

export default SignUpFormContainer;
