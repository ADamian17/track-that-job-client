import React from "react";

import useFormStepsStore from "@/zustand/useFormStepsStore";

import styles from "./SignUpFormContainer.module.scss";

const SignUpFormContainer: React.FC = (props) => {
  const { currentStep, ...Steps } = useFormStepsStore(state => state)
  const Step = Steps[currentStep].component

  return (
    <section className={styles.formWrapper}>
      <Step />

      <div className={styles.indicatorsWrapper}>
        <div className={`${styles.indicators} ${currentStep === "one" && styles.active}`} />
        <div className={`${styles.indicators} ${currentStep === "two" && styles.active}`} />
      </div>
    </section>
  )
};

export default SignUpFormContainer;

