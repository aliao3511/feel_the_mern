import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// must not be logged in
const Auth = ({ component: Component, loggedIn, ...rest }) => (
    <Route {...rest} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/tweets' />
        )
    )} />
);

// must be logged in
const Protected = ({ component: Component, loggedIn, exact }) => (
    <Route {...rest} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/login' />
        )
    )}/>
);

const mapStateToProps = state => (
    { loggedIn: state.session.isAuthenticated }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))

