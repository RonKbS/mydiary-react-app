import axios from 'axios';
import {
  GET_ALL_ENTRIES_SUCCESS,
  GET_ALL_ENTRIES_INITIATED,
} from './types';

const URL_LOCAL = 'https://mydiary-backend.herokuapp.com/api/v1';

export const fetchEntries = () => dispatch => {
  dispatch({ type: GET_ALL_ENTRIES_INITIATED, payload: true });
  const token = localStorage.getItem('login_token');
  axios.defaults.headers.common.token = token;
  return axios
    .get(`${URL_LOCAL}/entries`)
    .then((response) => {
      dispatch({ type: GET_ALL_ENTRIES_SUCCESS, payload: response.data.Message });
    });
};

export default fetchEntries;
