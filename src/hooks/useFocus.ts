import { useRef } from 'react';

export const useFocus = <T>() => {
  const htmlElRef = useRef<HTMLElementRef<T>>(null);

  const setFocus = () => {
    if (htmlElRef.current && 'focus' in htmlElRef.current) {
      typeof htmlElRef.current.focus === 'function' &&
        htmlElRef.current.focus();
    }
  };

  const setBlur = () => {
    if (htmlElRef.current && 'blur' in htmlElRef.current) {
      typeof htmlElRef.current.blur === 'function' && htmlElRef.current.blur();
    }
  };

  return [htmlElRef, setFocus, setBlur] as const;
};
