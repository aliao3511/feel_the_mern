const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// router.get('/test', (req, res) => res.json({ msg: 'users' }));

// registering a new user
router.post('/register', (req, res) => {

    // const { errors, isValid } = validateRegisterInput(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'email already registered' });
            } else {
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                // res.json(user)
                                const payload = { id: user.id, name: user.handle };
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token,
                                        });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

// logging in a user
router.post('/login', (req, res) => {

    // const { errors, isValid } = validateLoginInput(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'no account associated with this email'} );
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // res.json({ msg: 'logged in!!' });
                        const payload = { id: user.id, name: user.handle };
                        jwt.sign(
                            payload, 
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token,
                                });
                            });
                    } else {
                        return res.status(400).json({ msg: 'incorrect password' });
                    }
                });
        });
});

module.exports = router;