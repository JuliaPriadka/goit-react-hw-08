import { useSelector } from 'react-redux';
import Contact from '../Contact/contact';
import css from '../ContactList/contactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactListItem}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
