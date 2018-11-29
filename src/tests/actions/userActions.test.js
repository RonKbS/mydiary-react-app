import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  register,
} from '../../actions/userActions';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
} from '../../actions/types';

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
    mock.onPost('https://mydiary-backend.herokuapp.com/api/v1/auth/signup').reply(201, response);
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
    mock.onPost('https://mydiary-backend.herokuapp.com/api/v1/auth/signup').reply(400, response);
    register()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(
      [
        { type: REGISTER_USER_INITIATED, payload: true },
        { type: REGISTER_USER_ERROR, payload: response.Message },
      ],
    );
  });
});
