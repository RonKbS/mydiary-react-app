import { shallow } from 'enzyme';
import React from 'react';
import { Dashboard } from '../../components/Dashboard';
import Navbar from '../../components/landingPage/NavBar';
import EntriesList, { SingleEntry } from '../../components/Entries/ViewEntries';

let wrapper;

describe('Dashboard component', () => {
  const props = {
    entries: [],
    createEntrysuccess: false,
    dispatch: jest.fn(),
  };
  const fetchEntries = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Dashboard {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Navbar correctly', () => {
    expect(wrapper.find(Navbar).dive()).toMatchSnapshot();
  });

  it('should render EntriesList correctly', () => {
    expect(wrapper.find(EntriesList).dive()).toMatchSnapshot();
  });

  // Coverage does not work here yet
  it('should render SingleEntry correctly', () => {
    const Entrieswrapper = shallow(<EntriesList entries={[]} />);
    expect(Entrieswrapper.find(SingleEntry)).toMatchSnapshot();
  });

  it('should not call dispatch if no new entry is added', () => {
    const nextProps = {
      createEntrysuccess: false,
    };
    wrapper.setProps({ ...nextProps });
    expect(fetchEntries).not.toBeCalled();
  });

  it('should display new entry on adding an entry successfully', () => {
    const nextProps = {
      createEntrysuccess: true,
    };
    wrapper.setProps({ ...nextProps });
    expect(wrapper.instance().props.dispatch).toBeCalled();
  });
});
