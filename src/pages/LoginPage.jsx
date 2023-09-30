import { Container, Link, Title } from "components/AuthForm/AuthForm.styled";
import { LoginForm } from "components/AuthForm/LoginForm";

const LoginPage = () => {
    return (
      <Container>
        <Title>Log In</Title>
        <LoginForm />
        <p className="TextAuth">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </Container>
    );
  };
  
  export default LoginPage;