import { JobStatusType, JobsType } from '@/types';
import { create } from 'zustand';

type UseJobsStoreState = {
  jobsList: JobsType | null;
  jobCount: number;
};

type UseJobsStoreActions = {
  setJobsList: (jobList: UseJobsStoreState['jobsList']) => void;
  setFilteredJobsList: (filter: JobStatusType | 'all') => void;
  resetJobsList: () => void;
};

const initialJobsState = {
  jobCount: 0,
  jobsList: [],
} satisfies UseJobsStoreState;

const useJobsStore = create<UseJobsStoreState & UseJobsStoreActions>((set) => ({
  ...initialJobsState,
  setJobsList: (jobsList) => {
    set({ jobsList, jobCount: jobsList?.length });
  },
  setFilteredJobsList: (filter) => {
    console.log(filter);
  },
  resetJobsList: () => set(initialJobsState),
}));

export default useJobsStore;
