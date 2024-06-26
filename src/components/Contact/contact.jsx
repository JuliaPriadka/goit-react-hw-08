import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import css from '../Contact/contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactWrapper}>
      <div>
        <div className={css.contactItem}>
          <IoMdPerson />
          <p>{data.name}</p>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p>{data.number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(data.id))}>
        Delete
      </button>
    </div>
  );
}
