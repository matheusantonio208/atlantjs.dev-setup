import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #dddddd;

  img {
    height: 25px;
    padding-right: 30px;
    border-right: 1px solid #dddddd;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
  padding-left: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999999;

  &:first-of-type {
    padding-left: 30px;
  }

  &.${(props) => props.activeClassName} {
    color: #444444;
  }
`;
