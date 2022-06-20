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
const op = db.Sequelize.Op;

const indexController = {

    
  index:(req,res) =>{

    
        
      

    producto.findAll( {include: [{association: 'productoUsuario'}]} )
    .then(data=>{
      return res.render('index', {productos: data , datita} )
    })

    .catch(error=>{
      return res.send(error)
    })
  },

  /* gibson: (req,res) => {

    producto.findAll(
        { where : [ { titulo : {[op.like] : `%Gibson%` } } ]} 
        ) 
    .then((data) => 
    {
        return res.render('index', {gibson: data})
    })
} , */




  showOne : (req,res) => {
    let busqueda = req.query.search;

    producto.findAll(
        {where : [{titulo:{[op.like]:`%${busqueda}%`}}]},
        {where : [{descripcion:{[op.like]:`%${busqueda}%`}}]}) 
    .then((result) => 
    {
        return res.render("search-results" , {productos : result})
    })
} 
}

module.exports = indexController;