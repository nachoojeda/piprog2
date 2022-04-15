const db = require('../db')

const controller = { //objetos literales
    index: function (req, res) {
        res.render('index',  {productos: db.products}) 
    },
    productAdd: function(req,res) {
        res.render('product-add', {productos: db.products});
      },
      searchresults : function(req,res) {
        res.render('search-results', {productos: db.products});
      },
    login: function (req,res) {
        res.render('login')
    },
    register: function (req,res) {
        res.render('register')
    },
    products: function (req,res) {
      res.render('product', {productos: db.products})
  }
}
module.exports = controller;
