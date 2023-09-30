import { Container, Link, Title } from 'components/AuthForm/AuthForm.styled';
import { RegisterForm } from 'components/AuthForm/RegisterForm';

const RegisterPage = () => {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
      <p className="TextAuth">
        Already registered? <Link to={'/login'}>Sign in</Link>
      </p>
    </Container>
  );
};

export default RegisterPage;
