import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Login } from '../../components/Login';

describe('Login component', () => {
  let wrapper;
  const createSpy = (toSpy) => jest.spyOn(wrapper.instance(), toSpy);
  const mockStore = configureMockStore();
  const nextProps = {
    isLoggedIn: true,
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  const state = {
    username: '',
    password: '',
    redirect: false,
  };
  const props = {
    loading: false,
    isLoggedIn: false,
    signIn: jest.fn(),
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<Login {...props} {...state} />);
  });

  it('should set state when handleChange event is fired', () => {
    const spy = createSpy('handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="username"]').first().simulate('change', { target: { value: 'some value' } });
    expect(spy).toBeCalled();
  });

  it('should call handleSubmit on form when submit button is clicked', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(wrapper.instance().props.signIn).toBeCalled();
  });

  it('should not redirect if isLoggedIn is false', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(wrapper.state().redirect).toEqual(false);
  });

  it('should redirect on successful login', () => {
    wrapper.setProps({ ...nextProps });
    expect(wrapper.state().redirect).toEqual(true);
  });
});
