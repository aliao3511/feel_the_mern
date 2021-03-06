const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body : '';

    if (!Validator.isLength(data.body, { min: 5, max: 140 })) {
        errors.body = 'tweet must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'tweet cannot be blank';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};

