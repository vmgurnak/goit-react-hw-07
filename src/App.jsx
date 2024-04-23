// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { requestContacts } from '../src/services/api';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

requestContacts();

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <ContactList />
    </div>
  );
};

export default App;
