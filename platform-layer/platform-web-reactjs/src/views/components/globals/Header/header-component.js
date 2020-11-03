import React from 'react';
import { Link } from 'react-router-dom';

import logo from '#assets/img/logo.png';

import { Container, Nav, NavItem } from './header-component-style.js';

export default function ComponentName() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Nav>
        <NavItem to="/" exact activeClassName="active">
          Encomendas
        </NavItem>
        <NavItem to="/deliveryman" activeClassName="active">
          Entregadores
        </NavItem>
        <NavItem to="/recipient" activeClassName="active">
          Destinatários
        </NavItem>
        <NavItem to="/problems" activeClassName="active">
          Problemas
        </NavItem>
      </Nav>
    </Container>
  );
}
