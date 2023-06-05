declare namespace OtherProfessionInput {
  type HandlersWithError = (props: Pick<MainArgsType, "hasError">) => void;

  type MainArgsType = {
    inputClassName?: string;
    globalProfession: string;
    hasError: boolean;
    inputVal: string;
    handlers: {
      onBlurHandler: HandlersWithError;
      onFocusHandler: HandlersWithError;
      onSetValueHandler: (val: string) => void;
      onHandleKeyUp: () => void;
    };
  };

  type ProviderType = {
    children: React.ReactNode;
  } & Omit<MainArgsType, "globalProfession" | "inputClassName">;

  type ContextType = Pick<MainArgsType, "inputVal" | "hasError"> & {
    handleClickListItem: (e: React.MouseEvent<HTMLLIElement>) => void;
    handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleMenuKeyUp: (e: React.KeyboardEvent<HTMLMenuElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    menuRef: React.RefObject<HTMLElementDynamicRef<HTMLMenuElement>>;
    inputRef: React.RefObject<HTMLElementDynamicRef<HTMLInputElement>>;
    setMenuBlur: () => void;
    setMenuFocus: () => void;
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
    showList: boolean;
    handleCloseList: (e: MouseEvent) => void;
  };
}
