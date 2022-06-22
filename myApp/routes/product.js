const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({
    storage: storage
})


router.get('/id/:id', productController.show)

router.get('/product-add', productController.create)

router.post('/product-add', upload.single('foto'), productController.store)

router.get('/product-edit/:id', productController.edit)

router.post('/product-edit/:id', upload.single('foto'), productController.update)

router.get('/product-delete/:id', productController.destroy)

router.post('/comment', productController.createComment)




module.exports = router;