import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { AddEntry } from '../../components/Entries/AddEntry';

describe('CreateArticle component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const createSpy = (toSpy) => jest.spyOn(wrapper.instance(), toSpy);

  const props = {
    dispatch: jest.fn(),
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });

  beforeEach(() => {
    mockStore({});
    wrapper = mount(<AddEntry
      {...props}
    />);
  });


  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should call dipatch when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.dispatch).toBeCalled();
  });

  it('should set state for article body when handleChange is called', () => {
    const spy = createSpy('handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find('input[name="title"]').simulate('change', { target: { value: 'some value' } });
    expect(spy).toBeCalled();
  });
});
