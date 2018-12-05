import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from './landingPage/NavBar';
import AddEntry from './Entries/AddEntry';
import EntriesList from './Entries/ViewEntries';
import fetchEntries from '../actions/entryActions';
import { CREATE_ENTRY_SUCCESS } from '../actions/types';

export class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEntries());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.createEntrysuccess === true) {
      const { dispatch } = this.props;
      dispatch(
        { type: CREATE_ENTRY_SUCCESS, payload: false },
        fetchEntries(),
      );
    }
  }

  render() {
    const { entries } = this.props;
    return (
      <div>
        <NavBar />
        <div className="container dashboard-content">
          <div className="row">
            <div className="col-12 lp-text text-center">
              <button className="btn btn-light lp-btn" type="button" data-toggle="modal" data-target="#addEntry">
                <h3>Add an entry</h3>
              </button>
              <AddEntry />
            </div>
          </div>
        </div>
        <div className="container-fluid article-list dash">
          <EntriesList entries={entries} />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  entries: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  createEntrysuccess: PropTypes.bool,
};

Dashboard.defaultProps = {
  createEntrysuccess: false,
};

const mapStateToProps = state => ({
  entries: state.entry.entriesPayload,
  createEntrysuccess: state.entry.createEntrysuccess,
});

export default connect(mapStateToProps)(Dashboard);
