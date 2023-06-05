import React, { createContext, useState } from "react";

import { useFocus } from "../../../hooks/useFocus";
import fireMxpOnBlurEvent from "../helpers/fireMxpOnBlurEvent";
import useSpecialtyTabIndexStore from "../../../sp-state/useSpecialtyTabIndexStore";
import validateHandler from "../helpers/validateHandler";

export const OtherProfessionCtx =
  createContext<OtherProfessionInput.ContextType>(
    {} as OtherProfessionInput.ContextType
  );

const OtherProfessionProvider: React.FC<OtherProfessionInput.ProviderType> = ({
  children,
  inputVal,
  hasError,
  handlers: { onBlurHandler, onFocusHandler, onSetValueHandler, onHandleKeyUp },
}) => {
  const { tabIndex, increaseTabIndex, decreaseTabIndex, resetTabIndex } =
    useSpecialtyTabIndexStore(state => state);
  const [menuRef, setMenuFocus, setMenuBlur] = useFocus<HTMLMenuElement>();
  const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();
  const [showList, setShowList] = useState(false);
  const [timeIn, setTimeIn] = useState(0);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    validateHandler(onFocusHandler);
    setTimeIn(Date.now());
    onFocusHandler({ hasError: false });

    if (e.target.value.length >= 1 && !showList) setShowList(true);
    resetTabIndex();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    validateHandler(onBlurHandler);

    const hasError = !value || value.length <= 2;
    onBlurHandler({ hasError });
    setShowList(false);
    fireMxpOnBlurEvent({ value, hasError, timeIn });
    resetTabIndex();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 1) {
      setShowList(true);
    } else {
      setShowList(false);
    }

    validateHandler(onSetValueHandler);
    onSetValueHandler(e.target.value);
  };

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    validateHandler(onHandleKeyUp);

    if (e.key === "ArrowDown" && tabIndex < 9) {
      onHandleKeyUp();
      setMenuBlur();
      increaseTabIndex(tabIndex + 1);
    }
  };

  const handleClickListItem = (e: React.MouseEvent<HTMLLIElement>) => {
    let itemValue: string | undefined;
    if (e.currentTarget.tagName === "LI") {
      itemValue = e.currentTarget.dataset?.value;
    }

    onSetValueHandler(itemValue as string);

    setShowList(false);
    resetTabIndex();
  };

  const handleMenuKeyUp = (e: React.KeyboardEvent<HTMLMenuElement>) => {
    if (e.key === "ArrowDown" && tabIndex < 9) {
      increaseTabIndex(tabIndex + 1);
      return;
    }

    if (e.key === "ArrowUp") {
      if (tabIndex === 1) {
        setInputFocus();
      }

      decreaseTabIndex(tabIndex - 1);
      return;
    }

    if (e.key === "Enter") {
      let itemValue: string | undefined;
      if ((e.target as HTMLMenuElement).tagName === "LI") {
        itemValue = (e.target as HTMLMenuElement).dataset[
          "value"
        ]?.toLowerCase();
      }

      onSetValueHandler(itemValue as string);

      setShowList(false);
      resetTabIndex();
    }
  };

  const handleCloseList = (e: MouseEvent) => {
    if (e.target !== menuRef.current && e.target !== inputRef.current) {
      if (inputRef.current?.value && inputRef.current?.value?.length <= 2) {
        validateHandler(onBlurHandler);

        onBlurHandler({ hasError: true });
        setShowList(false);
        inputRef.current.blur();
        resetTabIndex();
      }
    }
  };

  const ctxValue = {
    handleBlur,
    handleChange,
    handleClickListItem,
    handleCloseList,
    handleFocus,
    handleInputKeyUp,
    handleMenuKeyUp,
    hasError,
    inputRef,
    inputVal,
    menuRef,
    setMenuBlur,
    setMenuFocus,
    setShowList,
    showList,
  };

  return (
    <OtherProfessionCtx.Provider value={ctxValue}>
      {children}
    </OtherProfessionCtx.Provider>
  );
};

export default OtherProfessionProvider;
