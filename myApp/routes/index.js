/*const express = require('express');

const router = express.Router();
const iController = require('../controllers/indexController');



router.get('/', iController.index);
router.get('/login', iController.login)
router.get('/register', iController.register)
router.get('/search-results', iController.searchresults);

module.exports = router;*/

const express = require('express');

const router = express.Router();
const indexController = require('../controllers/indexController');

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination : function (req , file , cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
    } ,
    filename : function (req , file , cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage })


router.get('/', upload.single('foto')  , indexController.index);

// router.get('/', upload.single('foto')  , indexController.gibson);

router.get('/busqueda/',  upload.single('foto') ,indexController.showOne);



module.exports = router; 
