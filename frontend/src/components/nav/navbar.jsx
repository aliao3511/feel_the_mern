import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.history.push('/login'));
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to='/tweets'>all tweets</Link>
                    {/* <Link to='/profile'>profile</Link> */}
                    <Link to='/new_tweet'>tweet tweet</Link>
                    <button onClick={this.logoutUser}>log out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/signup'>sign up</Link>
                    <Link to='/login'>log in</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <>
                {this.getLinks()}
            </>
        );
    }

}