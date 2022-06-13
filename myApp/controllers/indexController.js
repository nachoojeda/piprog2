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

const product = db.Product;

const indexController = {
  index:(req,res) =>{
    product.findAll()
    .then(data=>{
      return res.send(data)
    })
    .catch(error=>{
      return res.send(error)
    })
  }
}

module.exports = indexController;