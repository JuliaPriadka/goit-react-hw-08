import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/authNav';
import Navigation from '../Navigation/navigation';
import UserMenu from '../UserMenu/userMenu';
import css from './appBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
