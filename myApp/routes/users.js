var express = require('express');
var router = express.Router();
const controller = require('../controllers/profileController')

/* GET users listing. */

router.get('/login', controller.login);

router.get('/profile-edit', controller.profileEdit);

router.get('/profile', controller.profile);

router.get('/register', controller.register);


module.exports = router;
