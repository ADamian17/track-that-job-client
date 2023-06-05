import { create } from 'zustand';

export type JobStatusType =
  | 'all'
  | 'applied'
  | 'rejected'
  | 'no response'
  | 'in progress'
  | 'completed';

type UseJobStatusStoreType = {
  currentJobStatus: JobStatusType;
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
