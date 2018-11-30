import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  register,
  signInUser,
} from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from '../../actions/types';

const URL_LOCAL = 'http://127.0.0.1:5000/api/v1';

describe('userAction', () => {
  let store;
  let mock;
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    mock = new MockAdapter(axios);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });

  it('should register a user', async () => {
    const response = {
      token: 'my secret token',
      user: { email: 'user@gmail.com', password: 'Abc12345', username: 'user' },
    };
    mock.onPost(`${URL_LOCAL}/auth/signup`).reply(201, response);
    register()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_INITIATED, payload: true },
        { type: REGISTER_USER_SUCCESS, payload: true },
      ],
    );
  });
  it('should not register a user with wrong details', async () => {
    const response = {
      Message: 'Password and name should be atleast 8 characters long',
    };
    mock.onPost(`${URL_LOCAL}/auth/signup`).reply(400, response);
    register()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_INITIATED, payload: true },
        { type: REGISTER_USER_ERROR, payload: response.Message },
      ],
    );
  });

  it('should login a user', async () => {
    const response = { token: 'token' };
    mock
      .onPost(`${URL_LOCAL}/login`)
      .reply(200, response);
    signInUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: LOGIN_USER_INITIATED, payload: true },
      { type: LOGIN_USER_SUCCESS, payload: true },
    ]);
  });

  it('should not login a user without a valid email or password', async () => {
    const response = {
      Message: 'Wrong credentials entered.',
    };
    mock
      .onPost(`${URL_LOCAL}/login`)
      .reply(400, response);
    signInUser()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: LOGIN_USER_INITIATED, payload: true },
      { type: LOGIN_USER_ERROR, payload: response.Message },
    ]);
  });
});
