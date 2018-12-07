
import {
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_INITIATED,
  CREATE_ENTRY_ERROR,
  GET_ALL_ENTRIES_INITIATED,
  GET_ALL_ENTRIES_SUCCESS,
} from '../../actions/types';
import entryReducer from '../../reducers/entryReducer';

describe('userReducers', () => {
  let initialState;
  let error;

  beforeEach(() => {
    initialState = {
      loading: false,
      entryPayload: {},
      createEntrysuccess: false,
      createEntryError: {},
    };
  });

  it('should run initial state', () => {
    expect(entryReducer(initialState, {})).toEqual(initialState);
  });

  it('should begin the loader when CREATE_ENTRY_INITIATED is changed to true', () => {
    const action = {
      type: CREATE_ENTRY_INITIATED,
      payload: true,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set createEntryuccess state to true when CREATE_ENTRY_SUCCESS is passed', () => {
    const action = {
      type: CREATE_ENTRY_SUCCESS,
      payload: true,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      createEntrysuccess: true,
    });
  });

  it('should add an error when CREATE_ENTRY_ERROR is passed', () => {
    error = 'Wrongly formatted data was entered';
    const action = {
      type: CREATE_ENTRY_ERROR,
      payload: error,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      createEntryError: error,
    });
  });

  it('should set loading to true for GET_ALL_ENTRIES_INITIATED ', () => {
    error = 'Wrongly formatted data was entered';
    const action = {
      type: GET_ALL_ENTRIES_INITIATED,
      payload: true,
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should add an empty string to state on GET_ALL_ENTRIES_SUCCESS', () => {
    error = 'Wrongly formatted data was entered';
    const action = {
      type: GET_ALL_ENTRIES_SUCCESS,
      payload: '',
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      entriesPayload: '',
      loading: false,
    });
  });

  it('should add entries to state on GET_ALL_ENTRIES_SUCCESS', () => {
    error = 'Wrongly formatted data was entered';
    const action = {
      type: GET_ALL_ENTRIES_SUCCESS,
      payload: [1, 2, 3],
    };
    const currentState = entryReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      entriesPayload: action.payload,
      loading: false,
    });
  });
});
