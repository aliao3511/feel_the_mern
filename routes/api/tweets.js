const express = require('express');
const router = express.Router();
const validateTweetInput = require('../../validation/tweets');
const Tweet = require('../../models/Tweet');
const passport = require('passport');

// router.get('/test', (req, res) => res.json({ msg: 'tweets' }));

// get all tweets
router.get('/', (req, res) => {
    Tweet.find()
        .sort({ date: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ message: 'no tweets found :-(' }));
});

// get a single user's tweets
router.get('/user/:userId', (req, res) => {
    Tweet.find({ user: req.params.userId })
        .sort('date', -1)
        .then(tweets => res.json(tweets))
        .catch(err => res.status(404).json({ message: 'no tweets found :-(' }));
});

// get a single tweet
router.get('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => res.json(tweet))
        .catch(err => res.status(404).json({ message: 'no tweet found :-(' }));
});

// create a tweet *PROTECTED*
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
    
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
        return res.status(422).json(errors);
    }

    const newTweet = new Tweet({
        body: req.body.body,
        user: req.user.id
    });

    newTweet.save()
        .then(tweet => res.json(tweet))
        .catch(err => console.log(err));
});

module.exports = router;