import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import css from '../Contact/contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

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
        onClick={() =>
          dispatch(deleteContact(data.id))
            .unwrap()
            .then(() => {
              toast.success('Contact deleted!', {
                style: {
                  color: 'rgb(154 6 131)',
                },
              });
            })
            .catch(() => {
              toast.error('Error! Please try again');
            })
        }>
        Delete
      </button>
    </div>
  );
}
