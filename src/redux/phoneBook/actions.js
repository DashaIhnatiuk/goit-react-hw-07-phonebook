import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const setFilter = createAction('contacts/setFilter');
const clearError = createAction('contacts/clearError');

export default {
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
};