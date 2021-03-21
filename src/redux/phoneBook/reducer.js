import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  setFilter,
  clearError,
} = actions;

const items = createReducer(initialState.contacts, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});


const loading = createReducer(initialState.loading, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const onError = (_, { payload }) => payload;
const error = createReducer(initialState.error, {
  [fetchContactsError]: onError,
  [addContactError]: onError,
  [deleteContactError]: onError,
  [clearError]: () => null,
});

const filter = createReducer(initialState.filter, {
  [setFilter]: (_, { payload }) => payload,
});


export default combineReducers({
  items,
  filter,
  loading,
  error,
});
