import {
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_INITIATED,
  CREATE_ENTRY_ERROR,
  GET_ALL_ENTRIES_SUCCESS,
  GET_ALL_ENTRIES_INITIATED,
} from '../actions/types';

const initialState = {
  loading: false,
  entryPayload: {},
  createEntrysuccess: false,
  createEntryError: {},
  entriesPayload: [],
};
let entries;

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
    case GET_ALL_ENTRIES_INITIATED:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ENTRIES_SUCCESS:
      if (typeof action.payload === 'string') {
        const { payload } = action;
        entries = payload;
      } else {
        entries = action.payload.reverse();
      }
      return {
        ...state,
        entriesPayload: entries,
        loading: false,
      };
    default:
      return state;
  }
};

export default entryReducer;
