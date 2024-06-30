import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/contactForm';
import SearchBox from '../../components/SearchBox/searchBox';
import { Circles } from 'react-loader-spinner';
import ContactList from '../../components/ContactList/contactList';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactsPage.module.css';
import { Toaster } from 'react-hot-toast';

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <Toaster />
      <SearchBox />
      {loading && (
        <Circles
          height="60"
          width="60"
          color="violet"
          ariaLabel="circles-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          visible={true}
        />
      )}
      {isError && <p>{isError}</p>}
      <ContactList />
    </div>
  );
}
