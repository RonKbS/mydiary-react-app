import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
} from './types';

const URL_LOCAL = 'http://127.0.0.1:5000/api/v1';

export const register = (postData) => dispatch => {
  toast.dismiss();
  dispatch({ type: REGISTER_USER_INITIATED, payload: true });
  axios
    .post(`${URL_LOCAL}/auth/signup`, postData)
    .then(() => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: true });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data.Message });
      toast.error(error.response.data.Message, { autoClose: false, hideProgressBar: true });
    });
};


export const signInUser = payload => async dispatch => {
  toast.dismiss();
  dispatch({ type: LOGIN_USER_INITIATED, payload: true });
  axios
    .post(`${URL_LOCAL}/login`, payload)
    .then(response => {
      localStorage.setItem('login_token', response.data.token);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: true });
      toast.success(
        "You've successfully opened your diary.", { autoClose: 5500, hideProgressBar: true },
      );
    })
    .catch(error => {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: error.response.data.Message,
      });
      toast.error(
        `${error.response.data.Message}`, { autoClose: false },
      );
    });
};
