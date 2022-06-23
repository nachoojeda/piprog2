const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination : function (req , file , cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    } ,
    filename : function (req , file , cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage })

router.get('/profile-edit/:id', profileController.edit)
router.post('/profile-edit/:id' , upload.single('foto') , profileController.update)
router.get('/profile/:id', profileController.show);
router.get('/logout', profileController.logout);
router.get('/login', profileController.login);
router.post('/login', profileController.procesarLogin);
router.get('/register', profileController.register);
router.post('/register', upload.single('foto') , profileController.procesarRegister);

module.exports = router;
