import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestContacts } from '../services/api';

// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thankAPI) => {
    try {
      const data = await requestContacts();
      return data;
    } catch (err) {
      thankAPI.rejectWithValue(err.message);
    }
  },
);

// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (_, thankAPI) => {
    try {
    } catch (err) {
      thankAPI.rejectWithValue(err.message);
    }
  },
);

// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thankAPI) => {
    try {
    } catch (err) {
      thankAPI.rejectWithValue(err.message);
    }
  },
);
