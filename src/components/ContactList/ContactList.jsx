import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/Contact/operations';

import { Button, Item, List, Text } from './ContactList.styled';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'Redux/Contact/selector';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const filteredContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: <span>{number}</span>
            </Text>
            <Button type="button" id={id} onClick={handleDelete}>
             Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
