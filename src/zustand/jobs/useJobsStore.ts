import { JobStatusType, JobsType } from '@/types';
import { create } from 'zustand';

export type UseJobsStoreState = {
  jobsList: JobsType | null;
  jobCount: number | null;
};

type UseJobsStoreActions = {
  setJobsList: (data: UseJobsStoreState) => void;
  resetJobsList: () => void;
};

const initialJobsState = {
  jobCount: 0,
  jobsList: [],
} satisfies UseJobsStoreState;

const useJobsStore = create<UseJobsStoreState & UseJobsStoreActions>((set) => ({
  ...initialJobsState,
  setJobsList: ({ jobsList, jobCount }) => {
    set({ jobsList, jobCount });
  },
  resetJobsList: () => set(initialJobsState),
}));

export default useJobsStore;
