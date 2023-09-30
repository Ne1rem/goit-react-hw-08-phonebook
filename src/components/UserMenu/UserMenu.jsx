import { Button } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Greetings, UserMenuContainer } from './UserMenu.styled';
import { logOut } from 'Redux/Auth/operations';
import { selectUser } from 'Redux/Auth/selector';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserMenuContainer>
      <Greetings>Welcome, {user.name}</Greetings>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
