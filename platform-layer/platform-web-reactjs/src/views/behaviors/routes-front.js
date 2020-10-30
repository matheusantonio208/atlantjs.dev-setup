import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '#layouts/root-layouts.js';

import ExamplePage from '#pages/example-page.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ExamplePage} />
      <Route path="/next-page" exact component={ExamplePage} />
    </Switch>
  );
}
