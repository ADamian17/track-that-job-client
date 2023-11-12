import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UseAuthStoreType = {
  currentUser: string | null;
  setCurrentUser: (token: string) => void;
};

const initialState = {
  currentUser: null,
};

const useAuthStore = create(
  persist<UseAuthStoreType>(
    (set) => ({
      ...initialState,
      setCurrentUser: (token) =>
        set({
          currentUser: token,
        }),
    }),
    {
      name: 'c-usr',
    }
  )
);

export default useAuthStore;
