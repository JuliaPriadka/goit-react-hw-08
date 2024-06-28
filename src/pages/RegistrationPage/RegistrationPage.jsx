import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/registrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div className={css.registrationPage}>
      <div className={css.registrationPageText}>
        <p className={css.registrationPageElem}>Please Register or </p>
        <Link to="/login" className={css.registrationPageLink}>
          Log In
        </Link>
      </div>
      <RegistrationForm />
    </div>
  );
}
