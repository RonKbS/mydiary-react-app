import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';

const TestComponent = () => {
  render()(
    <h1>Test Component</h1>,
  );
};

describe('PrivateRoute Component', () => {
  beforeEach(() => {
    window.localStorage.setItem('jwt', JSON.stringify('token1234'));
  });

  it('should render TestComponent if the login_token is valid', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute component={TestComponent} />
      </MemoryRouter>,
    );
    localStorage.setItem('auth_token', 'my athentication token');
    expect(wrapper.find(TestComponent)).toBeTruthy();
  });
});
