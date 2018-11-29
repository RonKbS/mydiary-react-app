import React from 'react';
import Loader from 'react-loader';
import PropTypes from 'prop-types';

const LandingPage = ({
  handleRegisterChange,
  handleRegisterSubmit,
  username,
  email,
  password,
  loading,
}) => (
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
      <div className="card card-body collapse register-login" id="register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="registerForm">
                <h1 className="text-center">Create Diary</h1>
                <form id="form" className="registerUser" onSubmit={handleRegisterSubmit}>
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">Name</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-envelope" /></div>
                      </div>
                      <input type="text" name="username" className="form-control input-field " id="username" value={username} onChange={handleRegisterChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-key" /></div>
                      </div>
                      <input type="text" className="form-control input-field" name="email" id="email" value={email} onChange={handleRegisterChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">Lock</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user" /></div>
                      </div>
                      <input type="password" className="form-control input-field" name="password" id="password" value={password} onChange={handleRegisterChange} />
                    </div>
                  </div>
                  <Loader loaded={!loading}>
                    <button className="btn btn-block btn-light" type="submit" value="Submit">Create</button>
                  </Loader>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body collapse register-login" id="login">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="registerForm">
                <h1 className="text-center">Open Diary</h1>
                <form id="form" className="loginUser"/* onSubmit={this.handleSubmit} */>
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">Name</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-envelope" /></div>
                      </div>
                      <input type="text" name="username" className="form-control input-field" id="username" /* value={username} onChange={this.handleChange} */ />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">Lock</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user" /></div>
                      </div>
                      <input type="password" className="form-control input-field" name="password" id="password" /* value={password} onChange={this.handleChange} */ />
                    </div>
                  </div>
                  <button className="btn btn-block btn-light" type="submit" value="Submit">Open</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LandingPage.propTypes = {
  handleRegisterChange: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LandingPage;
