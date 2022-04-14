const { application } = require('express');
var express = require('express');
//const controller = require('../controllers/productController');
var router = express.Router();
//const controller = require('../controllers/indexController');
const controller = require('../controllers/productController');

/* GET home page. */

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
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


router.get('/search-result', function(req, res, next) {
  res.render('search-result', { title: 'Express' });
});


module.exports = router;
