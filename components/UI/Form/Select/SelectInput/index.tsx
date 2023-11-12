import { useSelectCtx } from "../context/Select.provider";

import styles from './SelectInput.module.scss';

type SelectListType = {}

const SelectInput: React.FC<SelectListType> = ({ }) => {
  const {
    handleOpenList,
    inputRef,
    inputValue,
    isOpen,
    handleInputKeyUp,
  } = useSelectCtx();
  const icon = isOpen ? "up" : 'down';

  return (
    <div className={styles.selectInputWrapper}>
      <svg className={styles.selectIcon}>
        <use href={`/icons/arrows.svg#${icon}`}></use>
      </svg>

      <input
        onClick={handleOpenList}
        onKeyUp={handleInputKeyUp}
        className={styles.selectInput}
        id="select-input"
        readOnly
        ref={inputRef}
        type="text"
        value={inputValue}
        placeholder="...select one"
      />
    </div>
  );
}

export default SelectInput;
