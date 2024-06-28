import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homePage}>
      <p className={css.homePageText}>Welcome to Phonebook Homepage !</p>
      {!isLoggedIn && (
        <div>
          <p>To use the app please</p>
          <Link to="/register" className={css.homePageLink}>
            register
          </Link>
          <p>or</p>
          <Link to="/login" className={css.homePageLink}>
            log in
          </Link>
        </div>
      )}
    </div>
  );
}
