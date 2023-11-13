import { useEffect, useId } from "react";

import { useSelectCtx } from "../context/Select.provider";
import SelectListItem, { SelectListItemType } from "../SelectListItem";

import styles from './SelectList.module.scss';

type SelectListType = {
  items: Pick<SelectListItemType, "label" | "value">[]
}

const SelectList: React.FC<SelectListType> = ({ items }) => {
  const { handleCloseList, isOpen, menuRef, handleMenuKeyUp } = useSelectCtx();
  const id = useId()
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
      {
        items && items.map((item, idx) => (
          <SelectListItem key={id} idx={idx} value={item.value} label={item.label} />
        ))
      }
    </menu>
  );
}

export default SelectList;
