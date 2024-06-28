import { useDispatch, useSelector } from 'react-redux';
import css from './userMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <p className={css.userMenuText}>Welcome, {user.name}!</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
}
