import {
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_INITIATED,
  CREATE_ENTRY_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  entryPayload: {},
  createEntrysuccess: false,
  createEntryError: {},
};

export const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        createEntrysuccess: action.payload,
        loading: false,
      };
    case CREATE_ENTRY_ERROR:
      return {
        ...state,
        createEntryError: action.payload,
        loading: false,
      };
    case CREATE_ENTRY_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default entryReducer;
