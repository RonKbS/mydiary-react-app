import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

it('renders the App component correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
