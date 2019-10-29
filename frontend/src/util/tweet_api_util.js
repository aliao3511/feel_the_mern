import axios from 'axios';

export const getTweets = () => {
    return axios.get('/api/tweets');
};

export const getTweet = id => {
    return axios.get(`/api/tweets/${id}`);
};

export const getUserTweets = id => {
    return axios.get(`/api/tweets/user/${id}`);
};

export const createTweet = tweet => {
    return axios.post('/api/tweets/create', tweet);
};