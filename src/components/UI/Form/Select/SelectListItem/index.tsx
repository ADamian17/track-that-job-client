import { useEffect } from "react";
import { useFocus } from "@/hooks/useFocus";

import { useSelectCtx } from "../context/Select.provider";

import styles from './SelectListItem.module.scss';

type SelectListItemType = {
  idx: number;
  text: string;
}

const SelectListItem: React.FC<SelectListItemType> = ({ idx, text }) => {
  const [liRef, setLiFocus] = useFocus<HTMLLIElement>();
  const { tabIndex, handleSetInputValue } = useSelectCtx();

  useEffect(() => {
    if (liRef.current?.tabIndex === tabIndex) {
      setLiFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liRef, liRef.current?.tabIndex, tabIndex]);

  return (
    <li
      className={styles.listItem}
      onClick={handleSetInputValue}
      ref={liRef}
      role="presentation"
      tabIndex={idx + 1}
      data-value={`${text}-${idx}`}
    >
      <p className={styles.label}>Item {idx}</p>
    </li>
  );
}

export default SelectListItem;
