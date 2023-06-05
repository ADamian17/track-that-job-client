import { useRef, useState } from "react";
import FieldWrapper from "../FieldWrapper";

import styles from "./Select.module.scss";
import SelectList from "./SelectList";
import SelectInput from "./SelectInput";
import SelectProvider from "./context/Select.provider";

type SelectType = {
  error?: boolean;
  errorMsg?: string;
  inputLabel?: string;
  inputDescription?: string;
}

const Select: React.FC<SelectType> = ({
  error,
  errorMsg,
  inputDescription,
  inputLabel,
}) => (
  <FieldWrapper
    error={error!}
    errorMsg={errorMsg!}
    inputDescription={inputDescription!}
    inputLabel={inputLabel!}
  >
    <SelectProvider>
      <div className={styles.selectWrapper}>
        <SelectInput />

        <SelectList />
      </div>
    </SelectProvider>

  </FieldWrapper>
);

export default Select;
