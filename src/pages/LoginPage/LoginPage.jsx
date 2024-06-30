import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/loginForm';
import css from './LoginPage.module.css';
import { Circles } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectAuthLoading, selectIsError } from '../../redux/auth/selectors';

export default function LoginPage() {
  const loading = useSelector(selectAuthLoading);
  const isError = useSelector(selectIsError);
  return (
    <div className={css.loginPage}>
      <div className={css.loginPageText}>
        <p className={css.loginPageElem}>Please Log In or</p>
        <Link to="/register" className={css.loginPageLink}>
          Register
        </Link>
      </div>
      <LoginForm />
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
