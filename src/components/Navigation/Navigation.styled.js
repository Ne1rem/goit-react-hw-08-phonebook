import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color:#00008B;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const NavContainer = styled.nav`
  width: ${({ $isAuth }) => ($isAuth ? 'auto' : '100%')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthContainer = styled.div`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #FF1493;

  & + & {
    margin-left: 15px;
  }

  &.active {
    font-weight: 500;
    color: #00FF00;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;
