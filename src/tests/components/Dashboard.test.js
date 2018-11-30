import { shallow } from 'enzyme';
import React from 'react';
import { Dashboard } from '../../components/Dashboard';

let wrapper;

describe('Login component', () => {
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
