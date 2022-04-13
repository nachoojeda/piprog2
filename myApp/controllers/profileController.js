const db = require('../db')
const controller = {
    index: function (req,res) {
        let iguitarras = db.products
res.render('index', {iguitarras})
    },
  login: function (req,res) {
      res.render('login');
  } ,
  register:function (req,res) {
      res.render('register')
      
  },
  profile: function (req,res) {
      res.render('profile', db.profile)
  }
}