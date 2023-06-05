import { create } from 'zustand';

type UseMobileSidebarStoreType = {
  showNav: boolean;
  resetShowNav: () => void;
  setShowNav: (val: boolean) => void;
};

const initialState = {
  showNav: false,
};

const useMobileSidebarStore = create<UseMobileSidebarStoreType>((set) => ({
  ...initialState,
  resetShowNav: () => set(initialState),
  setShowNav: (val) => set({ showNav: val }),
}));

export default useMobileSidebarStore;
