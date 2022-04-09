var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Express' });
});

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
