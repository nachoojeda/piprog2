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

edit: function (req, res) {
  let id = req.params.id;
  producto.findByPk(id)
  
.then(
  (result)=>{
    let fi = new Date(result.release_date)
    let fecha = `${fi.getDay()} - ${fi.getMonth() + 1} - ${fi.getFullYear()}`;
    
    let productEdit = {//creamos la producto

      titulo: result.titulo,
      descripcion: result.descripcion,
      foto: result.foto,
      created_at:fecha,
      id:id
      
    } 
   
    return res.render('product-edit',{productos:productEdit})

  } 
)
},

update: (req, res) =>{
  let productUpdate =req.body
  let id = req.params.id
  product.update({

    titulo: productUpdate.titulo,
    descripcion: productUpdate.descripcion,
    foto: productUpdate.foto,
    created_at: productUpdate.created_at

  },
    where[
      {id:id}
    ]


  )
.then((result)=> {
  return res.redirect("/")
})
},

destroy:(req, res)=>{
  let borrarProducto = req.params.id
  producto.destroy({
    where:[{id:borrarProducto}]
  })
  .then((result)=>{
    return res.redirect("/")

  })
}
}



module.exports = productController;
