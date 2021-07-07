import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path="/" component={SignIn}/>
    </Switch>
  )
}