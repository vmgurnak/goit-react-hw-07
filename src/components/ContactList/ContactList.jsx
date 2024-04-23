import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  // filter contacts
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase()),
  );

  return (
    <div className={css.contactListWrap}>
      <ul className={css.contactList}>
        {filterContacts.map(({ id, name, number }) => (
          <li className={css.contactListItem} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
