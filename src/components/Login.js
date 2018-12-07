import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { signInUser } from '../actions/userActions';
import fetchEntries from '../actions/entryActions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === true) {
      const { dispatch } = this.props;
      dispatch(fetchEntries());
      this.setState({
        redirect: true,
      });
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const payload = {
      name: username,
      password,
    };
    const { dispatch } = this.props;
    dispatch(signInUser(payload));
  };

  render() {
    const { username, password, redirect } = this.state;
    const { loading } = this.props;
    if (redirect) {
      const to = { pathname: '/dashboard' };
      return (<Redirect exact to={to} />);
    }
    return (
      <div className="card card-body collapse register-login" id="login">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="registerForm">
                <h1 className="text-center">Open Diary</h1>
                <form id="form" className="loginUser" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">Name</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-envelope" /></div>
                      </div>
                      <input
                        type="text"
                        name="username"
                        className="form-control input-field"
                        autoComplete="off"
                        id="username"
                        value={username}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">Lock</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user" /></div>
                      </div>
                      <input
                        type="password"
                        className="form-control input-field"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <Loader loaded={!loading}>
                    <button className="btn btn-block btn-light" type="submit" value="Submit">Open</button>
                  </Loader>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

Login.defaultProps = {
  isLoggedIn: false,
  loading: false,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  isLoggedIn: state.user.isLoggedIn,
  loginError: state.user.loginError,
});

export default connect(mapStateToProps)(Login);
