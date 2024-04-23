import { createSlice } from '@reduxjs/toolkit';

// import initialContacts from '../contactsList.json';

import { fetchContacts } from './contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload,
  //     );
  //   },
  // },
  // Об'єкт редюсерів для асинхронних генераторів екшенів
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

// Генератори Action Creator
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// функції-селектори для використання в useSelector
export const selectContacts = state => state.contacts.items;
