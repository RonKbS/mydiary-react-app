import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute, checkLoginStatus } from '../routes/PrivateRoute';

const jwt = require('jsonwebtoken');

const TestComponent = () => {
  render()(
    <h1>Test Component</h1>,
  );
};

describe('PrivateRoute Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute component={TestComponent} />
      </MemoryRouter>,
    );
  });

  it('should render TestComponent if the login_token is valid', () => {
    localStorage.setItem('auth_token', 'my athentication token');
    expect(wrapper.find(TestComponent)).toBeTruthy();
  });

  it('should return false it token does not exist', () => {
    expect(checkLoginStatus()).toEqual(false);
  });

  it('should return true if token is valid', () => {
    const encodedToken = { token: 'token' };
    const secret = 'HS256';
    const token = jwt.sign({
      data: encodedToken,
    }, secret, { expiresIn: '1h' });
    window.localStorage.setItem('login_token', token);
    expect(checkLoginStatus()).toEqual(true);
  });

  it('should return false if token is expired', () => {
    const encodedToken = { token: 'token' };
    const secret = 'HS256';
    const token = jwt.sign({
      data: encodedToken,
    }, secret, { expiresIn: '0.0000003h' });
    window.localStorage.setItem('login_token', token);
    expect(checkLoginStatus()).toEqual(false);
  });
});
