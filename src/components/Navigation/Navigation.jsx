import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

import {
  Header,
  NavContainer,
  NavItem,
  AuthContainer,
} from './Navigation.styled';
import { selectIsLoggedIn } from 'Redux/Auth/selector';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <NavContainer $isAuth={isLoggedIn}>
        <NavItem to="/" end>
          Home
        </NavItem>
        {isLoggedIn ? (
          <NavItem to="/contacts">Contacts</NavItem>
        ) : (
          <AuthContainer>
            <NavItem to="/register">Register</NavItem>
            <NavItem to="/login">Log In</NavItem>
          </AuthContainer>
        )}
      </NavContainer>
      {isLoggedIn && <UserMenu />}
    </Header>
  );
};

export default Navigation;
