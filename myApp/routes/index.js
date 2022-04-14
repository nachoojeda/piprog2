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


router.get('/', controller.index);

router.get('/product-add', controller.productAdd);

router.get('/product', controller.products );

router.get('/search-results', controller.searchresults);


module.exports = router;
