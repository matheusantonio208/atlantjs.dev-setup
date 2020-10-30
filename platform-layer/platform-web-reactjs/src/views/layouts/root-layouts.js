import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

import ExampleLayout from '#layouts/example-layout.js';

export default function RouterWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ExampleLayout>
          <Component {...props} />
        </ExampleLayout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
