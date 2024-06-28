import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/loginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div className={css.loginPage}>
      <div className={css.loginPageText}>
        <p className={css.loginPageElem}>Please Log In or</p>
        <Link to="/register" className={css.loginPageLink}>
          Register
        </Link>
      </div>
      <LoginForm />
    </div>
  );
}
