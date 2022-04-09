const { application } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

router.get('/headerLogueado', function(req, res, next) {
  res.render('headerLogueado', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/product-add', function(req, res, next) {
  res.render('product-add', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/search-results', function(req, res, next) {
  res.render('search-results', { title: 'Express' });
});


module.exports = router;
