import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotFound from '../components/notFound/NotFound';
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/landingPage/LandingPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Routes;
