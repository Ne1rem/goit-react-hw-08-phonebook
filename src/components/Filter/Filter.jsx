import { useDispatch } from 'react-redux';
import { Form, Input, Label } from 'components/AuthForm/AuthForm.styled';
import { filterContacts } from 'Redux/Contact/FilterSlice';


const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts                       (e.target.value));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          placeholder="Enter contact name"
          onChange={onFilter}
        />
      </Label>
    </Form>
  );
};

export default Filter;
