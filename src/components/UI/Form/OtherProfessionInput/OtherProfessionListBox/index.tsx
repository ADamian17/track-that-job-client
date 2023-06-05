import React, { useContext, useEffect } from "react";

import filterListItems from "../helpers/filterListItems";
import OtherProfessionItem from "../OtherProfessionItem";
import OtherProfessionQuery from "../../../assets/StaticQueries/OtherProfession.query";

import styles from "./OtherProfessionListBox.module.scss";
import { OtherProfessionCtx } from "../context/OtherProfession.provider";
import useWindowSize from "../../../hooks/useWindowSize";

export type OtherProfessionListBoxType = {
  className?: string;
};

const OtherProfessionListBox: React.FC<OtherProfessionListBoxType> = ({
  className,
}) => {
  const autosuggestionList = OtherProfessionQuery();
  const {
    inputVal,
    handleClickListItem,
    showList,
    handleMenuKeyUp,
    menuRef,
    handleCloseList,
  } = useContext(OtherProfessionCtx);
  const { width: windowWidth } = useWindowSize();
  const itemsMax = windowWidth < 768 ? 6 : 9;
  const filteredItems = filterListItems(autosuggestionList, inputVal, itemsMax);
  const otherProfessionList =
    filteredItems.nodes &&
    filteredItems.nodes.map(({ autosuggestionItem }, idx) => (
      <OtherProfessionItem
        onClick={handleClickListItem}
        key={`${autosuggestionItem}-${idx}`}
        suggestionItem={autosuggestionItem!}
        selectedOption={inputVal}
        idx={idx}
      />
    ));

  useEffect(() => {
    document.addEventListener("click", handleCloseList);

    return () => {
      document.removeEventListener("click", handleCloseList);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showList && filteredItems.nodesLen > 0 && (
        <menu
          className={`${styles.otherProfessionListBox} ${className}`}
          onKeyUp={handleMenuKeyUp}
          ref={menuRef}
          role="listbox"
        >
          {otherProfessionList}
        </menu>
      )}
    </>
  );
};

export default OtherProfessionListBox;
