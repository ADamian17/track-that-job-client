import React from "react";

import OpInputField from "./OpInputField";
import OtherProfessionListBox from "./OtherProfessionListBox";
import OtherProfessionProvider from "./context/OtherProfession.provider";

import styles from "./OtherProfessionInput.module.scss";

const OtherProfessionInput: React.FC<OtherProfessionInput.MainArgsType> = ({
  globalProfession,
  hasError,
  inputVal,
  handlers,
  inputClassName,
}) => (
  <OtherProfessionProvider
    hasError={hasError}
    inputVal={inputVal}
    handlers={handlers}
  >
    {globalProfession === "7" && (
      <>
        <label htmlFor="other_profession">
          If other, please enter the title of your profession.
        </label>

        <div className={styles.otherProfessionWrapper}>
          <OpInputField className={inputClassName} />

          <OtherProfessionListBox />
        </div>
      </>
    )}
  </OtherProfessionProvider>
);

export default OtherProfessionInput;
