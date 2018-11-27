import React from 'react';

const LandingPage = () => (
  <div className="lp-body">
    <div className="container-fluid">
      <h1 className="font-italic font-weight-bold">MyDiary</h1>
      <h2 className="heading-two font-italic">Free Online Diary</h2>
    </div>
    <div className="container lg-content">
      <div className="row">
        <h1 className="justify-content-center">
          Welcome to the free online diary
        </h1>
      </div>
      <div className="row">
        <h3 className="appear">
          Create your online diary
        </h3>
        <button className="btn btn-link lp-btn" type="button" data-toggle="collapse" data-target="#register" aria-expanded="false" aria-controls="collapseExample">
          <h3 className="appear">here</h3>
        </button>
        <h3 className="appear">or</h3>
        <button className="btn btn-link lp-btn" type="button" data-toggle="collapse" data-target="#login" aria-expanded="false" aria-controls="collapseExample">
          <h3 className="appear">login</h3>
        </button>
        <div className="collapse" id="register">
          <div className="card card-body register-login">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="registerForm">
                    <h1 className="text-center">Create Diary</h1>
                    <form id="form" className="registerUser"/* onSubmit={this.handleSubmit} */>
                      <div className="form-group">
                        <label className="control-label" htmlFor="username">Name</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-envelope" /></div>
                          </div>
                          <input type="text" name="username" className="form-control" id="username" /* value={username} onChange={this.handleChange} */ />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="email">Email</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-key" /></div>
                          </div>
                          <input type="text" className="form-control" name="email" id="email" /* value={email} onChange={this.handleChange} */ />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="password">Lock</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-user" /></div>
                          </div>
                          <input type="password" className="form-control" name="password" id="password" /* value={password} onChange={this.handleChange} */ />
                        </div>
                      </div>
                      <button className="btn btn-block btn-primary" type="submit" value="Submit">Create</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse" id="login">
          <div className="card card-body register-login">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="registerForm">
                    <h1 className="text-center">Open Diary</h1>
                    <form id="form" className="loginUser"/* onSubmit={this.handleSubmit} */>
                      <div className="form-group">
                        <label className="control-label" htmlFor="username">Name</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-envelope" /></div>
                          </div>
                          <input type="text" name="username" className="form-control" id="username" /* value={username} onChange={this.handleChange} */ />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="password">Lock</label>
                        <div className="input-group mb-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fas fa-user" /></div>
                          </div>
                          <input type="password" className="form-control" name="password" id="password" /* value={password} onChange={this.handleChange} */ />
                        </div>
                      </div>
                      <button className="btn btn-block btn-primary" type="submit" value="Submit">Open</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
