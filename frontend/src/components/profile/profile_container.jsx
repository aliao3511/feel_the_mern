import { connect } from 'react-redux';
import React from 'react';

import { fetchUserTweets } from '../../actions/tweet_actions';

const mapStateToProps = state => {
    return {
        tweets: Object.values(state.tweets.user),
        currentUser: state.session.user,
    };
};

class Profile extends React.Component {

    componentDidMount() {
        this.props.fetchUserTweets(this.props.currentUser.id);
    }

    renderTweets() {
        if (this.props.tweets.length === 0) {
            return (<div>user has no tweets</div>);
        } else {
            return (
                <ul>
                    {this.props.tweets.map(tweet => <li key={tweet._id}>{tweet.body}</li>)}
                </ul>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderTweets()}
            </div>
        )
    }
}

export default connect(mapStateToProps, { fetchUserTweets })(Profile);