declare type HTMLElementRef<T> = {
  [Key in keyof T]: T[Key];
};

declare type ActionType<T> = {
  type: keyof T;
  payload?: any;
};
