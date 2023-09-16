export type JobStatusType =
  | 'applied'
  | 'completed'
  | 'in_progress'
  | 'no_response'
  | 'rejected';

export type UserDataType = {
  user: UserType;
  progress: ProgressType;
};

export type UserResponseType = {
  status: number;
  data: UserDataType;
};

export type UserType = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profession: string;
  role: string;
  profile_image: string;
  jobs: JobsType;
  reports?: unknown[];
  career_coach?: unknown[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProgressType = Record<'label' | 'count', string | number>[];

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

export type SessionDataType = {
  user: {
    signedJwt?: string;
  };
};

export type JobDataResponseType = {
  status: number;
  count: number;
  jobs: JobsType;
};

export type TokenExpiredErrorType = {
  status: number;
  name: string;
  message: string;
  expiredAt: string;
};

export type JobFilterByType = {
  filterBy?: JobStatusType;
};

export declare namespace Buttons {
  type variants =
    | 'is-primary'
    | 'is-secondary'
    | 'is-info'
    | 'is-danger'
    | 'is-link';

  type SharedProps = {
    extraClasses?: string;
    variant?: variants;
    children: React.ReactNode;
  };

  type Props = {
    text: string;
  } & SharedProps;

  type LinkProps = SharedProps;
}
