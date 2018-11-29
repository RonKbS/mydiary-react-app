import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './landingPage/LandingPage';
import { register } from '../actions/userActions';

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
      window.location.reload();
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
      <LandingPage
        handleRegisterChange={this.handleChange}
        handleRegisterSubmit={this.handleSubmit}
        username={username}
        email={email}
        password={password}
        loading={loading}
      />
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
}, dispatch);

RegisterUser.propTypes = {
  register: PropTypes.func.isRequired,
  registerUserSuccess: PropTypes.bool,
  loading: PropTypes.bool,
};

RegisterUser.defaultProps = {
  registerUserSuccess: false,
  loading: false,
};

export default connect(mapStateToProps, matchDispatchToProps)(RegisterUser);
