import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/notFound/NotFound';

const Routes = () => (
  <Switch>
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
