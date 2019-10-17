const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.handle = validText(data.handle) ? data.handle : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
        errors.handle = 'handle must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'handle field required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.handle = 'email field required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.handle = 'not a valid email';
    }

    if (Validator.isEmpty(data.password)) {
        errors.handle = 'password field required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'password must be between 6 and 30 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'password field required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'passwords not equal';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};