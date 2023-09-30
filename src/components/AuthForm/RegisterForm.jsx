import { useDispatch } from 'react-redux';

import { Button, Form, Input, Label } from './AuthForm.styled';
import { register } from 'Redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Username
        <Input
          type="text"
          name="name"
          required
          placeholder="Anatoliy Daniliuk"
          minLength={3}
          autoComplete="off"
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
          placeholder="e-mail@gmail.com"
          autoComplete="off"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
