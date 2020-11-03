import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '#assets/img/logo.png';

import { signInRequest } from '#behaviors/Auth/auth-actions.js';

import { Container, FormPanel, InputField } from './signin-page-style.js';

export default function SignInPage() {
  const dispatchAction = useDispatch();

  function handleSubmit({ email, password }) {
    console.tron.log(email);
    dispatchAction(signInRequest(email, password));
  }

  return (
    <Container>
      <FormPanel onSubmit={handleSubmit}>
        <img src={logo} alt="logo-fastfeet" />
        <label>Seu e-mail</label>
        <InputField type="email" name="email" placeholder="login@email.com" />

        <label>Sua senha</label>
        <InputField type="password" name="password" placeholder="*******" />

        <button type="submit">Entrar no Sistema</button>
      </FormPanel>
    </Container>
  );
}
