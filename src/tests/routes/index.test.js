import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import NotFound from '../../components/notFound/NotFound';
import LandingPage from '../../components/landingPage/LandingPage';

const mockStore = configureStore([]);
let store;


describe('Routes component', () => {
  beforeEach(() => {
    const data = {
      user: {
        isLoggedIn: true,
      },
    };
    store = mockStore(data);
  });

  it('should return the NotFound component for incorrect path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/none']}>
        <NotFound />
      </MemoryRouter>,
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  it('should return the login component for "/login" route path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
  });
});
