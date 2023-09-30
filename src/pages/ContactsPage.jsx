import { Container, Title } from 'components/AuthForm/AuthForm.styled';
import ContactForm from 'components/AuthForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <Container>
      <Title>Your TeleSphere</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
