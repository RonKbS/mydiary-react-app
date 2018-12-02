import React from 'react';
import NavBar from './landingPage/NavBar';
import AddEntry from './Entries/AddEntry';
// import Entries from '../Entries';

const Dashboard = () => (
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
    {/* <div className="container-fluid article-list dash">
      <Entries />
    </div> */}
  </div>
);

export default Dashboard;
