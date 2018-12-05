import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

export const checkLoginStatus = () => {
  if (localStorage.getItem('login_token') !== null) {
    const decoded_token = jwt_decode(localStorage.getItem('login_token'));
    const current_time = new Date().getTime() / 1000;
    if (current_time < decoded_token.exp) {
      return true;
    }
    toast.error('Please login again', { autoClose: false, hideProgressBar: true });
    return false;
  }
  return false;
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      checkLoginStatus()
        ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  }
  />
);

export default PrivateRoute;
