import React, { useEffect } from "react";

import { useFocus } from "../../../hooks/useFocus";
import useSpecialtyTabIndexStore from "../../../sp-state/useSpecialtyTabIndexStore";

import styles from "./OtherProfessionItem.module.scss";

export type OtherProfessionItemType = React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  className?: string;
  idx: number;
  selectedOption: string;
  suggestionItem: string;
};

const OtherProfessionItem: React.FC<OtherProfessionItemType> = ({
  className,
  idx,
  selectedOption,
  suggestionItem,
  ...rest
}) => {
  const [liRef, setLiFocus] = useFocus<HTMLLIElement>();
  const { tabIndex } = useSpecialtyTabIndexStore(state => state);

  useEffect(() => {
    if (liRef.current?.tabIndex === tabIndex) {
      setLiFocus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liRef, liRef.current?.tabIndex, tabIndex]);

  const handleCopy = (strToReplace: string, str: string) => {
    if (str.length <= 0) return strToReplace;

    return strToReplace.toLowerCase().replace(str, `<b>${str}</b>`);
  };

  return (
    <li
      className={styles.otherProfessionItem}
      data-value={suggestionItem}
      ref={liRef}
      role="presentation"
      tabIndex={idx + 1}
      {...rest}
    >
      <p
        className={styles.itemCopy}
        dangerouslySetInnerHTML={{
          __html: handleCopy(suggestionItem, selectedOption)!,
        }}
      />
    </li>
  );
};

export default OtherProfessionItem;
