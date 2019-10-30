import * as TweetApiUtil from '../util/tweet_api_util';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_TWEET = 'RECEIVE_TWEET';
export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET';
export const RECEIVE_USER_TWEETS = 'RECEIVE_USER_TWEETS';

// action creators
export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets,
});

export const receiveTweet = tweet => ({
    type: RECEIVE_TWEET,
    tweet
});

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
});

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});

// thunk action creators
export const fetchTweets = () => dispatch => {
    return TweetApiUtil.getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)));
};

export const fetchTweet = id => dispatch => {
    return TweetApiUtil.getTweet(id)
        .then(tweet => dispatch(receiveTweet(id)));
};

export const fetchUserTweets = id => dispatch => {
    return TweetApiUtil.getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)));
};

export const createTweet = tweet => dispatch => {
    return TweetApiUtil.createTweet(tweet)
        .then(tweet => dispatch(receiveNewTweet(tweet)));
};