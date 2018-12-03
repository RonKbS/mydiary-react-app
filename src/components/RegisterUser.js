import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader';
import { register, signInUser } from '../actions/userActions';
import { REGISTER_USER_SUCCESS } from '../actions/types';

export class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerUserSuccess === true) {
      const { signInUser, registerSuccess } = this.props;
      const { password, username } = this.state;
      const payload = {
        name: username,
        password,
      };
      registerSuccess();
      signInUser(payload);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, username } = this.state;
    const payload = {
      name: username,
      email,
      password,
    };

    const { register } = this.props;
    register(payload);
  }

  render() {
    const {
      email,
      password,
      username,
    } = this.state;
    const { loading } = this.props;
    return (
      <div className="card card-body collapse register-login" id="register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="registerForm">
                <h1 className="text-center">Create Diary</h1>
                <form id="form" className="registerUser" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="control-label" htmlFor="username">Name</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-envelope" /></div>
                      </div>
                      <input type="text" name="username" className="form-control input-field " id="username" value={username} onChange={this.handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">Email</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-key" /></div>
                      </div>
                      <input type="text" className="form-control input-field" name="email" id="email" value={email} onChange={this.handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="password">Lock</label>
                    <div className="input-group mb-2 input-lp">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user" /></div>
                      </div>
                      <input type="password" className="form-control input-field" name="password" id="password" value={password} onChange={this.handleChange} required />
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
    );
  }
}

const mapStateToProps = state => ({
  registerUserSuccess: state.user.registerUserSuccess,
  registerUserError: state.user.registerUserError,
  loading: state.user.loading,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  register,
  signInUser,
  registerSuccess: () => ({ type: REGISTER_USER_SUCCESS, payload: false }),
}, dispatch);

RegisterUser.propTypes = {
  register: PropTypes.func.isRequired,
  signInUser: PropTypes.func.isRequired,
  registerSuccess: PropTypes.func.isRequired,
  registerUserSuccess: PropTypes.bool,
  loading: PropTypes.bool,
};

RegisterUser.defaultProps = {
  registerUserSuccess: false,
  loading: false,
};

export default connect(mapStateToProps, matchDispatchToProps)(RegisterUser);
