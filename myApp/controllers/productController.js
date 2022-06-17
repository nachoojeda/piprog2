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
}  ,

create: (req, res) => {
  return res.render('product-add');

},
store: function (req, res) {
  let info = req.body; //Guardamos los datos

  let product = {//creamos la producto

    titulo: info.titulo,
    descripcion: info.descripcion,
    foto: info.foto,
    created_at: info.created_at
   
  } 
  

   /*  res.send(info)  */
    producto.create(product)

  .then((result) => {return res.redirect('/')}
  )
  
 
},

}



module.exports = productController;
