import { useReducer, useState } from 'react';
import { initialState, profileReducer } from './profileForm.reducer';
import { profileTypes } from './profileForm.types';

export default function useProfileForm() {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: profileTypes[e.target.name as keyof typeof profileTypes],
      payLoad: { value: e.target.value },
    });
  };

  return {
    ...state,
    handleOnChange,
  } as const;
}
