import React, { useEffect, useState } from "react";

import Form from "@/components/UI/Form";
import useFormStepsStore from "@/zustand/useFormStepsStore";
import useFormFieldsStore from "@/zustand/useFormFieldsStore";
import { fieldsAreValid } from "@/utils/fieldsAreValid";
import { useRouter } from "next/router";
import Auth from "@/libs/auth";

const SignUpFormContainer: React.FC = (props) => {
  const router = useRouter();
  const state = useFormFieldsStore(state => state)
  const {
    currentStep,
    steps,
    next,
    previous,
    isDisable,
    setIsDisable,
    resetSteps
  } = useFormStepsStore(state => state)
  const [loading, setLoading] = useState(false);

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
      if (!isDisable && !lastStep) return next();

      setLoading(true)

      const data = {
        first_name: state.firstName.value,
        last_name: state.lastName.value,
        email: state.email.value,
        password: state.password.value,
        profession: state.profession.value,
      };

      const res = await Auth.signup(data);

      if (res.status === 201) {
        setLoading(false);
        state.resetFormFields()
        resetSteps()
        router.replace("/sign-in/");
      }

    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Step />

      <Form.Controllers
        firstStep={firstStep}
        isDisable={isDisable}
        lastStep={lastStep}
        loading={loading}
        previous={previous}
      />

      <Form.Indicators
        steps={steps}
        currentStep={currentStep}
      />
    </Form>
  )
};

export default SignUpFormContainer;
