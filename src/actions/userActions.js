import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_INITIATED,
} from './types';

export const register = (postData) => dispatch => {
  toast.dismiss();
  dispatch({ type: REGISTER_USER_INITIATED, payload: true });
  axios
    .post('https://mydiary-backend.herokuapp.com/api/v1/auth/signup', postData)
    .then((response) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: true });
      toast.success(response.data.Message, { autoClose: 3500, hideProgressBar: true });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data.Message });
      toast.error(error.response.data.Message, { autoClose: false, hideProgressBar: true });
    });
};

export default register;
