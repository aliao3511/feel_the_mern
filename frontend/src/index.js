import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import Root from './components/root';
import configureStore from './store/store';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

// TESTING
// import { fetchTweets } from './actions/tweet_actions';
// TESTING

document.addEventListener('DOMContentLoaded', () => {
    let store;
    
    // if the user has a jwt from a previous session
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken); // set as authorization header in all requests
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser }};
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;

        // if the jwt is expired
        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }

    // TESTING
    // window.store = store;
    // window.fetchTweets = fetchTweets;
    // TESTING

        const root = document.getElementById('root');
        ReactDOM.render(<Root store={store} />, root)
});


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
