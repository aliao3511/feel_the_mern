import * as TweetApiUtil from '../util/tweet_api_util';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_TWEET = 'RECEIVE_TWEET';
export const RECEIVE_NEW_TWEET = 'RECEIVE_NEW_TWEET';

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

// thunk action creators
export const fetchTweets = () => dispatch => {
    TweetApiUtil.getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)));
};

export const fetchTweet = id => dispatch => {
    TweetApiUtil.getTweet(id)
        .then(tweet => dispatch(receiveTweet(id)));
};

export const fetchUserTweets = id => dispatch => {
    TweetApiUtil.getUserTweets(id)
        .then(tweets => dispatch(receiveTweets(tweets)));
};

export const createTweet = tweet => dispatch => {
    TweetApiUtil.createTweet(tweet)
        .then(tweet => dispatch(receiveNewTweet(tweet)));
};