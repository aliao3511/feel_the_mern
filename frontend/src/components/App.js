import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './mainpage.js';
// import NavBarContainer from '../components/nav/navbar_container';
// import LoginFormContainer from '../components/session/login_container';
// import SignupFormContainer from '../components/session/signup_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component={MainPage} />
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
    </Switch>
  </div>
)

export default App;
