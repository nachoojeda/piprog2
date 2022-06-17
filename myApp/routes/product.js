/*const express = require('express');

const router = express.Router();
const controller = require('../controllers/productController');



router.get('/', controller.index);
router.get('/product', controller.products)
router.get('/product-add', controller.productAdd)
router.get('/search-results', controller.searchresults);


router.get('/error', function(req, res) {
  res.render('error');
});

module.exports = router;*/

const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.get('/id/:id', productController.show)

router.get('/product-add', productController.create)

router.post('/product-add', productController.store)

router.get('/product-edit/:id', productController.edit)

router.post('/product-edit/:id', productController.update)

router.get('/product-delete/:id', productController.destroy)



module.exports = router; 