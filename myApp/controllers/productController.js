const db = require('../db')

const controller = {
    index: function (req, res) {
        res.render('index',  {productos: db.products}) 
    },
    productAdd: function(req, res, next) {
        res.render('product-add', {productos: db.products});
      },
      
      searchresults : function(req, res, next) {
        res.render('search-results', {productos: db.products});
      },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    },
    products: function (req, res) {
      res.render('products', {productos: db.products})
  }
}

module.exports = controller;
