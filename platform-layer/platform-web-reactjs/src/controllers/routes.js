import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ExamplePage from '#views/pages/example-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ExamplePage} />
      <Route path="/next-page" exact component={ExamplePage} />
    </Switch>
  );
}
