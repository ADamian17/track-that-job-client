export type JobStatusType =
  | 'applied'
  | 'completed'
  | 'in_progress'
  | 'no_response'
  | 'rejected';

export type JobType = {
  _id: string;
  job_position: string;
  job_post_url: string;
  company_name: string;
  point_of_contact: string;
  job_status: JobStatusType;
  on_site: 'yes' | 'no';
  phone_screen: 'yes' | 'no';
  user: {};
  applied_date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type JobsType = Array<JobType>;
