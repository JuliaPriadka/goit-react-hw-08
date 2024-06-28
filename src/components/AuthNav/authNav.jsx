import { NavLink } from 'react-router-dom';
import css from './authNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNavigation}>
      <NavLink to="/register" className={css.authNavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authNavLink}>
        Log In
      </NavLink>
    </div>
  );
}
