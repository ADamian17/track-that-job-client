import React from "react";

import Button from "@/components/UI/Buttons/Button";
import Email from "./Email";
import FirstName from "./FirstName";
import LastName from "./LastName";
import useFormStepsStore from "@/zustand/useFormStepsStore";

import styles from "./StepOne.module.scss";

const StepOne: React.FC = () => {
  const {
    next,
    one,
  } = useFormStepsStore(state => state)

  const handleNext = () => {
    next();
  }

  return (
    <div className={styles.fieldsWrapper}>
      <FirstName />

      <LastName />

      <Email />

      <Button
        className={styles.nextBtn}
        disabled={!one.completed}
        onClick={handleNext}
        text="next"
        variant="is-primary"
      />
    </div>
  )
};

export default StepOne;
