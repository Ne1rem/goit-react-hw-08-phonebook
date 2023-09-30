import { ErrorMessage, Formik } from 'formik';
import { StyledForm, StyledField, StyledError, ErrorText } from './PhoneForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selector';
import { addContact } from 'Redux/operations';


const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase()) === undefined) {
      const item = { name: values.name, phone: values.number };
      dispatch(addContact(item)); 
      actions.resetForm();
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  return (
    <Formik
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <label>
            Name
            <StyledField name="name" />
            <StyledError name="name" component="div" />
            <ErrorMessage name="name">
              {() => (
                <ErrorText>
                  Wrong name: Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
                  Charles de Batz de Castelmore d'Artagnan
                </ErrorText>
              )}
            </ErrorMessage>
          </label>
          <label>
            Number
            <StyledField name="number" />
            <StyledError name="number" component="div" />
            <ErrorMessage name="number">
              {() => (
                <ErrorText>
                  Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
                </ErrorText>
              )}
            </ErrorMessage>
          </label>

          <button type="submit">Add contact</button>
        </StyledForm>
      )}
    </Formik>
  );
};
