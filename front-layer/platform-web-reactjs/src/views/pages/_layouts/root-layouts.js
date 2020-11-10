import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from './Default/default-layout.js';
import SignLayout from './Sign/sign-layout.js';

export default function RouterWrapper({ path, component: Component, ...rest }) {
  function switchLayout(pathOfLayout) {
    switch (pathOfLayout) {
      case '/login': {
        return SignLayout;
      }

      default: {
        return DefaultLayout;
      }
    }
  }

  const Layout = switchLayout(path);

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
