const express = require('express');

const router = express.Router();
const iController = require('../controllers/indexController');

/* GET home page. */

router.get('/', iController.index);
router.get('/login', iController.login)
router.get('/register', iController.register)
router.get('/search-results', iController.searchresults);

module.exports = router;
