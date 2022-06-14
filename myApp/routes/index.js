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

router.get('/', indexController.index);

router.get('/id/:id', indexController.show);

module.exports = router; 
