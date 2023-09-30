import { useDispatch, useSelector } from 'react-redux';


import { Button, Form, Input, Label } from './AuthForm.styled';
import { logIn } from 'Redux/Auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            autoComplete="off"
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
