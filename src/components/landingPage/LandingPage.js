import React from 'react';
import RegisterUser from '../RegisterUser';
import Login from '../Login';

const LandingPage = () => (
  <div className="lp-body container">
    <div className="row">
      <h1 className="justify-content-center">
        Welcome to your private online diary!
        <p />
        First time here? Create your very own diary for free.
      </h1>
      <p />
    </div>
    <div className="row">
      <div className="row">
        <button className="btn btn-light lp-btn" type="button" data-toggle="collapse" data-target="#register" aria-expanded="false" aria-controls="collapseExample">
          <h3>Create Diary</h3>
        </button>
        <button className="btn btn-light lp-btn" type="button" data-toggle="collapse" data-target="#login" aria-expanded="false" aria-controls="collapseExample">
          <h3>Open Diary</h3>
        </button>
      </div>
      <RegisterUser />
      <Login />
    </div>
  </div>
);

export default LandingPage;
