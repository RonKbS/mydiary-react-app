import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_INITIATED,
  LOGIN_USER_ERROR,
  CREATE_ENTRY_INITIATED,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_ERROR,
} from './types';

const URL_LOCAL = 'https://mydiary-backend.herokuapp.com/api/v1';

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
      toast.warn(
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

export const addEntry = postData => dispatch => {
  toast.dismiss();
  dispatch({ type: CREATE_ENTRY_INITIATED, payload: true });
  const token = localStorage.getItem('login_token');
  axios.defaults.headers.common.token = token;
  return axios
    .post(`${URL_LOCAL}/entries`, postData)
    .then(response => {
      dispatch({ type: CREATE_ENTRY_SUCCESS, payload: true });
      toast.warn(
        response.data.Message,
        { autoClose: 3500, hideProgressBar: true },
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
    })
    .catch((error) => {
      if (error.response) {
        const errorMessage = error.response.data.Message;
        localStorage.removeItem('login_token');
        dispatch({ type: CREATE_ENTRY_ERROR, payload: errorMessage });
        return toast.error('Please login again', { autoClose: false, hideProgressBar: true });
      }
      return toast.warn(
        'We had trouble connecting. Try reloading the page',
        { autoClose: 5500, hideProgressBar: true },
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
    });
};
