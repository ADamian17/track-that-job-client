import FieldWrapper from "../Form/FieldWrapper";

import SelectInput from "./SelectInput";
import SelectList from "./SelectList";
import SelectProvider from "./context/Select.provider";

import styles from "./Select.module.scss";

type SelectType = {
  error?: boolean;
  errorMsg?: string;
  inputLabel?: string;
  inputDescription?: string;
  children: React.ReactNode;
}

const Select = ({
  error,
  errorMsg,
  inputDescription,
  inputLabel,
  children,
}: SelectType) => (
  <FieldWrapper
    error={error!}
    errorMsg={errorMsg!}
    inputDescription={inputDescription!}
    inputLabel={inputLabel!}
  >
    <SelectProvider>
      <div className={styles.selectWrapper}>
        <SelectInput />

        {children}
      </div>
    </SelectProvider>

  </FieldWrapper>
);

Select.SelectList = SelectList

export default Select;
