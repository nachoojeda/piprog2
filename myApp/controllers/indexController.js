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

    let relaciones = {include:[{association: 'user'}]}

    producto.findAll({
        order: [
            ['created_at', 'DESC']
        ], 
        limit: 12}
        )
    
    .then(data=>{
      return res.render('index', {productos: data})
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
    let errors = {}
    
    producto.findAll({

        where:{[op.or]:
            [
        {titulo: {[op.like]: `%${busqueda}%`}},
        {descripcion:{[op.like]: `%${busqueda}%`}}
            ]
             }
                    })
    .then((result) => 
    {
        if (result == null) { 
            
            errors.message = "Este producto no existe";
        res.locals.errors = errors;
        return res.render('search-results') 
            } 
        else {
            
            return res.render("search-results" , {productos : result})
        }
        
    })
} 
}

module.exports = indexController;