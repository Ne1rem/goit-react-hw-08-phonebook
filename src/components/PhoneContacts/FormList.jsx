import React from 'react';
import { ContactFilter } from './ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'Redux/operations';
import { selectContacts, selectError, selectIsLoading, selectStatusFilter } from 'Redux/selector';

export const FormList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactFilter/>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {contacts?.length > 0 && (
        <ul>
          {(filter.length > 0
              ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
              : contacts
            ).map(item =>( 
            <li key={item.id}>
              {item.name}: {item.phone}
              <button onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
