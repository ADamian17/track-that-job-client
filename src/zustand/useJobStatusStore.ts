import { JobStatusType } from '@/types';
import { create } from 'zustand';

type UseJobStatusStoreType = {
  currentJobStatus: JobStatusType | 'all';
  setCurrentJobStatus: (
    jobStatus: UseJobStatusStoreType['currentJobStatus']
  ) => void;
};

const useJobStatusStore = create<UseJobStatusStoreType>((set) => ({
  currentJobStatus: 'all',
  setCurrentJobStatus: (jobStatus) =>
    set((_) => ({ currentJobStatus: jobStatus })),
}));

export default useJobStatusStore;
