const express = require('express');
const { body } =  require('express-validator/check'); // for validation of data
const UserController = require('../controllers/users');
const courseController = require('../controllers/courses')
const isAuth=require('../middleware/is-auth');
const router = express.Router();

router.get('/home/:category',UserController.homepage);

router.post('/home/:category/:courseTitle',courseController.courseController);

module.exports = router;