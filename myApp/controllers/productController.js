/*const db = require('../db')

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
}*/

const db = require('../database/models');

const producto = db.Producto;

const productController = {
  
   show: (req,res) => {
  let id = req.params.id; 
 
  producto.findByPk(id)
  .then(result=>{
      return res.render("product", {productos: result});
  })
  .catch(error=>{
    return res.send(error)
  })
} }






module.exports = productController;
