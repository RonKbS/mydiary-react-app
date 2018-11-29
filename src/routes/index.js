import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../components/notFound/NotFound';
import RegisterUser from '../components/RegisterUser';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={RegisterUser} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
