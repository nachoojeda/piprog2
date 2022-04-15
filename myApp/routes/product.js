const express = require('express');

const router = express.Router();
const controller = require('../controllers/productController');

/* GET home page. */

router.get('/', controller.index);
router.get('/products', controller.products)
router.get('/product-add', controller.productAdd)
router.get('/search-results', controller.searchresults);

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

module.exports = router;