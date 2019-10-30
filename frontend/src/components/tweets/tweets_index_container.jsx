import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions'

const mapStateToProps = state => {
    return {
        tweets: state.tweets.all,
    };
};

class TweetsIndex extends React.Component {

    componentDidMount() {
        this.props.fetchTweets();
    }

    renderTweets() {
        if (this.props.tweets.length > 0) {
            return (<div>no tweets</div>);
        } else {
            return (
                <ul>
                    {Object.values(this.props.tweets).map(tweet => <li key={tweet._id}>{tweet.body}</li>)}
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

export default connect(mapStateToProps, { fetchTweets })(TweetsIndex);