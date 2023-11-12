declare namespace Select {
  type Context = {
    handleCloseList: (e: MouseEvent) => void;
    handleInputKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleMenuKeyUp: (e: React.KeyboardEvent<HTMLMenuElement>) => void;
    handleOpenList: () => void;
    handleSetInputValue: (e: React.MouseEvent<HTMLLIElement>) => void;
    inputRef: React.RefObject<HTMLElementRef<HTMLInputElement>>;
    inputValue: string;
    isOpen: boolean;
    menuRef: React.RefObject<HTMLElementRef<HTMLMenuElement>>;
    setInputValue: Dispatch<SetStateAction<string>>;
    tabIndex: number;
  };

  type Provider = {
    children: React.ReactNode;
  };
}
