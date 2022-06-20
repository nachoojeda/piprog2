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
const comment = db.Comentario
const productController = {
  
   show: (req,res) => {
  let id = req.params.id; 
  let relaciones = {
    include: [{
      all: true ,
      nested: true
    }]
  }
 
  producto.findByPk(id , relaciones)
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

  let foto = req.file.filename;
  let product = {//creamos la producto

    titulo: info.titulo,
    descripcion: info.descripcion,
    foto: foto,
    created_at: info.created_at
   
  } 
  

   /*  res.send(info)  */
    producto.create(product)

  .then((result) => {return res.redirect('/')}
  )
  
 
},

edit: (req,res) =>{
  let id = req.params.id;

  producto.findByPk(id)
  .then((info)=>{
   
    let productEdit = {

    titulo: info.titulo,
    descripcion: info.descripcion,
    foto: info.foto,
    created_at: info.created_at,
    id:id
    }
    return res.render('product-edit' , {productos: productEdit})
  })
} ,

update: (req,res) =>{

  let productEdited = req.body;

 let id = req.params.id
 let foto = req.file.filename;
 producto.update({

    titulo: productEdited.titulo,
    descripcion: productEdited.descripcion,
    foto: foto,
    created_at: productEdited.created_at
   
  } ,

  {

    where: [{id:id}]
  }
 )
 .then(()=>{
  return res.redirect('/')
 })
}
,
destroy:(req, res)=>{
  let borrarProducto = req.params.id
  producto.destroy({
    where:[{id:borrarProducto}]
  })
  .then((result)=>{
    return res.redirect("/")

  })
},
comment: (req, res) => {
  if (req.session.user == undefined) {
      res.redirect('/users/login')
     
  
  } 
  let info = req.body
  let comentario = {
      comentario: info.comentarios,
      id_productos: req.params.id,
      users_id: req.session.user.id,
  }
comment.create(comentario)
  .then((result) => {
      return res.redirect('/products/id/' + id_productos)
  }).catch((err) => {
      console.log(err);
  });
 
},

}



module.exports = productController;
