import PropTypes from 'prop-types';
import React from 'react';

import Header from '#components/globals/Header/header-component.js';

import { Wrapper } from './default-layout-style.js';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
