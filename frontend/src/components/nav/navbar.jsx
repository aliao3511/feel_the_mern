import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to='/tweets'>all tweets</Link>
                    {/* <Link to='/profile'>profie</Link> */}
                    <Link to='/new_tweet'>tweet tweet</Link>
                    <button onClick={this.logoutUser}>log out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/sign up'>sign up</Link>
                    <Link to='/log in'>log in</Link>
                </div>
            );
        }
    }

}