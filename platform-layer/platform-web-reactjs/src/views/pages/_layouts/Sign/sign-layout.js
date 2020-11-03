import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from './sign-layout-style.js';

export default function SignLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SignLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
