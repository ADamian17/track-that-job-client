import React from "react";

import Form from "@/components/UI/Form";
import Button from "@/components/UI/Buttons/Button";

import styles from "./StepTwo.module.scss";
import useFormStepsStore from "@/zustand/useFormStepsStore";

const StepTwo: React.FC = (props) => {
  const { two, previous } = useFormStepsStore(state => state)
  return (
    <div className={styles.fieldsWrapper}>
      <Form.Input
        inputLabel="your password"
        name="password"
        type="password"
        autoComplete="on"
      />

      <Form.Input
        inputLabel="confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="on"
      />


      <Form.Input
        inputLabel="your profession"
        name="profession"
      />

      <div className={styles.btnsWrapper}>
        <Button
          text="back"
          variant="is-info"
          onClick={previous}
        />

        <Button
          className={styles.submitBtn}
          disabled={two.completedFields < 3}
          text="submit"
          variant="is-primary"
        />
      </div>
    </div>
  )
};

export default StepTwo;