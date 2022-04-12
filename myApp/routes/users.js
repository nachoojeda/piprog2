var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/profile-edit', function(req, res, next) {
  res.render('profile-edit', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


module.exports = router;
