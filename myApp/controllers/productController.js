//const db = require('../db')

const controller = { //objetos literales
    index: function (req, res) {
        //res.render('index',   {productos: db.products,comments: db.comentarios}) 
    },
    productAdd: function(req,res) {
       // res.render('product-add',  {productos: db.products,comments: db.comentarios});
      },
      searchresults : function(req,res) {
        res.render('search-results', {productos: db.products,comments: db.comentarios});
      },
    login: function (req,res) {
        res.render('login')
    },
    register: function (req,res) {
        res.render('register')
    },
    products: function (req,res) {
      
      //res.render('product', {productos: db.products, comments: db.comentarios})
  },
}



module.exports = controller;
