import { useEffect } from "react";

import { useSelectCtx } from "../context/Select.provider";

import styles from './SelectList.module.scss';
import SelectListItem from "../SelectListItem";

type SelectListType = {}

const SelectList: React.FC<SelectListType> = ({ }) => {
  const { handleCloseList, isOpen, menuRef, handleMenuKeyUp } = useSelectCtx();

  useEffect(() => {
    document.addEventListener("click", handleCloseList);

    return () => {
      document.removeEventListener("click", handleCloseList);
    };
  }, [handleCloseList]);

  return (
    <menu
      ref={menuRef}
      className={`${styles.selectList} ${isOpen && styles.isOpen}`}
      onKeyUp={handleMenuKeyUp}
    >
      <SelectListItem key={1} idx={1} text={"item"} />
      <SelectListItem key={2} idx={2} text={"item"} />
      <SelectListItem key={3} idx={3} text={"item"} />
    </menu>
  );
}

export default SelectList;
