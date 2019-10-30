import { RECEIVE_TWEET, RECEIVE_TWEETS, RECEIVE_NEW_TWEET, RECEIVE_USER_TWEETS } from '../actions/tweet_actions';

const tweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TWEETS:
            newState.all = action.tweets.data.reduce((acc, tweet) => {
                acc[tweet._id] = tweet;
                return acc;
            }, {});
            return newState;
        case RECEIVE_USER_TWEETS:
            newState.user = action.tweets.data.reduce((acc, tweet) => {
                acc[tweet._id] = tweet;
                return acc;
            }, {});
            return newState;
        case RECEIVE_NEW_TWEET:
            newState.new = action.tweet.data;
            return newState;
        case RECEIVE_TWEET:
            newState.all = action.tweet.data;
            return newState;
        default:
            return state;
    }
};

export default tweetsReducer;