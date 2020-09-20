const express = require('express');
const { body } =  require('express-validator/check'); // for validation of data
const User = require('../models/users');
const authController = require('../controllers/auth');

const router = express.Router();

router.put('/signup',[  // put because we create a user once so doesn't matter if its new or we overwrite existing data
    body('email')
        .isEmail()
        .withMessage('Please Enter a Valid Email') //Stored in error object which can be retrived.
        .custom((value, { req } ) => { //to check whether the email adress already exist or not. 
            return User.findOne({email: value}).then(UserDoc => {
                if(UserDoc){ // return a promise if validation done a async task
                    return Promise.reject('E-mail Adress already Exist');
                }
            })
        }).normalizeEmail(), // check for  .. or + - in the email and remove it 

    body('password')
        .trim()
        .isLength({min:5}),
    body('name')
        .trim()
        .not()
        .isEmpty() 
],authController.signup
);

router.post('/login',authController.login);

module.exports = router; //For exporting router to app.js