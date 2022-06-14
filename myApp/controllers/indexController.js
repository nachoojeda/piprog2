/*const db = require("../db");
const controller = {
    index: function (req, res) {
        res.render('index', {
            productos: db.products
        });
    },
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },
    products: function (req, res) {
        res.render('products', {
            productos: db.products
        })
    },
    searchresults: function (req, res) {
        res.render('search-results', {
            productos: db.products
        });
    }

}
module.exports = controller */

const db = require('../database/models');

const producto = db.Producto;

const indexController = {
  index:(req,res) =>{
    producto.findAll()
    .then(data=>{
      return res.send('index', {
        productos: data})
    })
    .catch(error=>{
      return res.send(error)
    })
  },
  show: (req,res) => {
    let id = req.params.id; 
   
    producto.findByPk(id).then(result=>{
        return res.send("product",  {producto: result});
    })
  }
} 

module.exports = indexController;