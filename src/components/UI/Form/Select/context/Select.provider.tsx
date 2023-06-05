import { createContext, useContext, useState } from "react";
import { useFocus } from "@/hooks/useFocus";

const SelectCtx = createContext<Select.Context>({} as Select.Context)

const SelectProvider: React.FC<Select.Provider> = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(1)
  const [inputRef, setInputFocus] = useFocus<HTMLInputElement>();
  const [menuRef, setMenuFocus, setMenuBlur] = useFocus<HTMLMenuElement>();
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSetInputValue = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e.target);
  }

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseList = (e: MouseEvent) => {
    if (
      e.target !== menuRef.current &&
      e.target !== inputRef.current
    ) {
      setIsOpen(false);
      setTabIndex(1)
    }
  };

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      console.log(e.key);
      setMenuBlur();
      setTabIndex(prev => prev + 1)
    }
  };

  const handleMenuKeyUp = (e: React.KeyboardEvent<HTMLMenuElement>) => {
    // if (e.key === "Enter") {
    //   let itemValue: string | undefined;
    //   if ((e.target as HTMLMenuElement).tagName === "LI") {
    //     itemValue = (e.target as HTMLMenuElement).dataset[
    //       "value"
    //     ]?.toLowerCase();
    //   }

    //   // onSetValueHandler(itemValue as string);

    //   setIsOpen(false);
    // }

    if (e.key === "ArrowDown") {
      console.log(e.key);

      if (e.key === "ArrowDown") {
        setTabIndex(prev => prev + 1)
        return;
      }
    }

    if (e.key === "ArrowUp") {
      if (tabIndex === 1) {
        setInputFocus();
      }

      setTabIndex(prev => {
        if (prev <= 1) return prev;

        return prev - 1
      });

      return;
    }
  };

  const value = {
    handleCloseList,
    handleInputKeyUp,
    handleMenuKeyUp,
    handleOpenList,
    handleSetInputValue,
    inputRef,
    inputValue,
    isOpen,
    menuRef,
    setInputValue,
    tabIndex
  };

  return (
    <SelectCtx.Provider value={value}>
      {children}
    </SelectCtx.Provider>
  )
};

export const useSelectCtx = () => useContext(SelectCtx);
export default SelectProvider;