import useFormStepsStore from "@/zustand/useFormStepsStore";
import Button from "../../Buttons/Button";

import styles from "./Controllers.module.scss";

type IndicatorsType = {
  lastStep: boolean
  firstStep: boolean
  isDisable: boolean
  previous: () => void
}

const Controllers: React.FC<IndicatorsType> = ({
  firstStep,
  lastStep,
  isDisable,
  previous
}) => (
  <div className={styles.btnsWrapper}>
    <Button
      type="button"
      text="back"
      variant="is-info"
      className={`${firstStep && styles.backBtnHide}`}
      onClick={previous}
    />

    <Button
      className={styles.submitBtn}
      text={lastStep ? "submit" : "next"}
      disabled={isDisable}
      variant="is-primary"
      type="submit"
    />
  </div>
)

export default Controllers;