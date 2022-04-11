const guitarras = require('../db')
const controller = {
    index: function (req,res) {
        let iguitarras = guitarras
res.render('index', {guitarras})
    },
  login: function (req,res) {
      res.render('login');
  } ,
  register:function (req,res) {
      res.render('register')
      
  },
  profile: function (req,res) {
      res.render('profile')
  }
}