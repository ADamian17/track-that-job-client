import { profileTypes } from './profileForm.types';

export const initialState = {
  firstName: {
    value: '',
    error: false,
  },
  lastName: {
    value: '',
    error: false,
  },
  email: {
    value: '',
    error: false,
  },
  password: {
    value: '',
    error: false,
  },
  confirmPassword: {
    value: '',
    error: false,
  },
  profession: {
    value: '',
    error: false,
  },
};

type ProfileReducerAction = {
  type: string;
  payLoad?: { value: string } | { error: boolean };
};

const setValue = (
  state = initialState,
  key: keyof typeof initialState,
  payLoad?: ProfileReducerAction['payLoad']
) => {
  const nextState = {
    ...state,
  };

  if (payLoad && 'value' in payLoad) {
    nextState[key] = {
      ...nextState[key],
      value: payLoad?.value,
    };
  }

  return nextState;
};

const setError = (
  state = initialState,
  key: keyof typeof initialState,
  payLoad?: ProfileReducerAction['payLoad']
) => {
  const nextState = {
    ...state,
  };

  if (payLoad && 'error' in payLoad) {
    nextState[key] = {
      ...nextState[key],
      error: payLoad?.error,
    };
  }

  return nextState;
};

export function profileReducer(
  state = initialState,
  action: ProfileReducerAction
) {
  switch (action.type) {
    case profileTypes.firstName:
      return setValue(state, profileTypes.firstName, action?.payLoad);
    case profileTypes.lastName:
      return setValue(state, profileTypes.lastName, action?.payLoad);
    case profileTypes.email:
      return setValue(state, profileTypes.email, action?.payLoad);
    case profileTypes.password:
      return setValue(state, profileTypes.password, action?.payLoad);
    case profileTypes.confirmPassword:
      return setValue(state, profileTypes.confirmPassword, action?.payLoad);
    case profileTypes.profession:
      return setValue(state, profileTypes.profession, action?.payLoad);
    default:
      return state;
  }
}
