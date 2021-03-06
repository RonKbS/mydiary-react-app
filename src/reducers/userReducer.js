import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
  LOGIN_USER_INITIATED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  registerUserSuccess: false,
  isLoggedIn: false,
  registerUserError: {},
  loginError: {},
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_INITIATED:
      return (
        Object.assign(
          {},
          state,
          { loading: action.payload },
        )
      );
    case REGISTER_USER_SUCCESS:
      return (
        Object.assign(
          {},
          state,
          { registerUserSuccess: action.payload },
          { loading: false },
        )
      );
    case REGISTER_USER_ERROR:
      return (
        Object.assign(
          {},
          state,
          { registerUserError: action.payload },
          { loading: false },
        )
      );
    case LOGIN_USER_INITIATED:
      return (
        Object.assign(
          {},
          state,
          { loading: action.payload },
        )
      );
    case LOGIN_USER_SUCCESS:
      return (
        Object.assign(
          {},
          state,
          { isLoggedIn: action.payload },
          { loading: false },
        )
      );

    case LOGIN_USER_ERROR:
      return (
        Object.assign(
          {},
          state,
          { loginError: action.payload },
          { loading: false },
        )
      );
    default:
      return state;
  }
};

export default userReducer;
