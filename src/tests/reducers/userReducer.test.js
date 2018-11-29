
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

describe('userReducers', () => {
  let initialState;
  let error;

  beforeEach(() => {
    initialState = {
      loading: false,
      registerUserSuccess: false,
      isLoggedIn: false,
      registerUserError: {},
      loginError: {},
    };
  });

  it('should run initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });

  it('should begin the loader when REGISTER_USER_INITIATED is changed to true', () => {
    const action = {
      type: REGISTER_USER_INITIATED,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should reload page when REGISTER_USER_SUCCESS is passed', () => {
    const action = {
      type: REGISTER_USER_SUCCESS,
      payload: true,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerUserSuccess: true,
    });
  });

  it('should add an error when REGISTER_USER_ERROR is passed', () => {
    error = 'Password and username should be atleast 5 alphanumeric characters and contain no spaces';
    const action = {
      type: REGISTER_USER_ERROR,
      payload: error,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      registerUserError: error,
    });
  });
});
