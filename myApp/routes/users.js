const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

/* GET users listing. */


//router.get('/login', controller.login);
//router.get('/profile-edit', controller.profileEdit);
//router.get('/profile', controller.profile);

router.get('/register', profileController.create);
router.get('/register', profileController.store);


module.exports = router;
