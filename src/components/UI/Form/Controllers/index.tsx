import Button from "../../Buttons/Button";

import styles from "./Controllers.module.scss";

type ControllersType = {
  lastStep: boolean
  firstStep: boolean
  isDisable: boolean
  previous: () => void
  loading: boolean;
}

const Controllers: React.FC<ControllersType> = ({
  firstStep,
  lastStep,
  isDisable,
  loading,
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
      isLoading={loading}
      disabled={isDisable}
      variant="is-primary"
      type="submit"
    />
  </div>
)

export default Controllers;