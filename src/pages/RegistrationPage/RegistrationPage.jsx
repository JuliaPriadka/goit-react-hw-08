import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/registrationForm';
import css from './RegistrationPage.module.css';
import { useSelector } from 'react-redux';
import { selectAuthLoading, selectIsError } from '../../redux/auth/selectors';
import { Circles } from 'react-loader-spinner';

export default function RegistrationPage() {
  const loading = useSelector(selectAuthLoading);
  const isError = useSelector(selectIsError);
  return (
    <div className={css.registrationPage}>
      <div className={css.registrationPageText}>
        <p className={css.registrationPageElem}>Please Register or </p>
        <Link to="/login" className={css.registrationPageLink}>
          Log In
        </Link>
      </div>
      <RegistrationForm />
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
      {isError && (
        <p className={css.error}>
          Ooops, something went wrong ,please try again
        </p>
      )}
    </div>
  );
}
