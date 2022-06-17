const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

/* GET users listing. */


//router.get('/login', controller.login);
//router.get('/profile-edit', controller.profileEdit);
//router.get('/profile', controller.profile);
//router.get('/profile', profileController.index);

router.get('/login', profileController.login);
router.post('/login', profileController.procesarLogin);
router.get('/register', profileController.register);
router.post('/register', profileController.procesarRegister);

module.exports = router;
