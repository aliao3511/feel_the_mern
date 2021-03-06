import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/mainpage.js';
import NavBarContainer from '../components/nav/navbar_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import TweetsIndex from '../components/tweets/tweets_index_container';
import ProfileContainer from '../components/profile/profile_container';
import TweetFormContainer from '../components/tweets/tweet_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path='/' component={MainPage} />
      <AuthRoute exact path='/login' component={LoginFormContainer}/>
      <AuthRoute exact path='/signup' component={SignupFormContainer}/>
      <ProtectedRoute exact path='/tweets' component={TweetsIndex} />
      <ProtectedRoute exact path='/profile' component={ProfileContainer} />
      <ProtectedRoute exact path='/new_tweet' component={TweetFormContainer} />
    </Switch>
  </div>
)

export default App;
