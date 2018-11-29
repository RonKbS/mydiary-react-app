import React from 'react';
import { mount } from 'enzyme';
import { RegisterUser } from '../../components/RegisterUser';

let wrapper;

describe('RegisterUser component', () => {
  const createSpy = (toSpy) => jest.spyOn(wrapper.instance(), toSpy);

  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });

  Object.defineProperty(window.location, 'reload', {
    configurable: true,
  });

  window.location.reload = jest.fn();
  const props = {
    history: { push: jest.fn() },
    registerUserSuccess: false,
    loading: false,
    register: jest.fn(),
  };

  const state = {
    username: '',
    email: '',
    password: '',
  };

  beforeEach(() => {
    wrapper = mount(<RegisterUser dispatch={jest.fn} {...props} {...state} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should not reload on unsuccessful registration', () => {
    const nextProps = {
      registerUserSuccess: false,
    };
    wrapper.setProps({ ...nextProps });
    expect(window.location.reload).not.toBeCalled();
  });

  it('should reload on registering successfully', () => {
    const nextProps = {
      registerUserSuccess: true,
    };
    wrapper.setProps({ ...nextProps });
    expect(window.location.reload).toBeCalled();
  });

  it('should call handleChange on form fill', () => {
    const spy = createSpy('handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="username"]').first().simulate('change', { target: { value: 'some value' } });
    expect(spy).toBeCalled();
  });

  it('should call handleSubmit on form submission', () => {
    const spy = createSpy('handleSubmit');
    wrapper.instance().forceUpdate();
    wrapper.find('button[value="Submit"]').first().simulate('submit', getEvent());
    expect(spy).toBeCalled();
  });
});
