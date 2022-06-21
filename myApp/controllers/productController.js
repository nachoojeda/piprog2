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
const comentario = db.Comentario
const usuario = db.Usuario
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
    created_at: info.created_at,
    id_usuario: req.session.user.id,
   
  } 
 

   /*  res.send(info)  */
    producto.create(product)

  .then((result) => {return res.redirect('/')}
  )
  
 
},

edit: (req,res) =>{
  let id = req.params.id;
  let errors = {}

  if (req.session.user != undefined) {
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
  } else {
    errors.message = "Para Editar un producto debes estar logueado";
    res.locals.errors = errors;
    return res.render('login')
  }
 
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
  let errors = {}

  if (req.session.user != undefined) {
    producto.destroy({
      where:[{id:borrarProducto}]
    })
    .then((result)=>{
      return res.redirect("/")
  
    })
  } else {
    errors.message = "Para Eliminar un producto debes estar logueado";
    res.locals.errors = errors;
    return res.render('login')
  }
  
}
 ,
<<<<<<< HEAD
comments: (req, res) => {
  if (req.session.user == undefined) {
      res.redirect('(/users/login')
=======
comment: (req, res) => {
  let data = req.body;
  let errors = {}; 

  if (req.session.user != undefined) {
      

    let createComment = {
      texto: data.texto,
      id_producto: req.params.id,
      id_usuario: req.session.user.id,
      
  }

  comentario.create(createComment)
      .then(data => {
          producto.findByPk(data.id)
              .then(result => {
                  
                          return res.redirect("/product/id/"  + req.params.id)
              })


      })
>>>>>>> cff3310dada6dec6a0095da752c88fa799a50d53
  } 
  else {
    errors.message = "Para Comentar un producto debes estar logueado";
    res.locals.errors = errors;
    return res.render('login')
  }
<<<<<<< HEAD
comment.create(comentario)
  .then((result) => {
      return res.send(comentario);

  }).catch((err) => {
      console.log(err);
  });
 
=======
>>>>>>> cff3310dada6dec6a0095da752c88fa799a50d53
},

}



module.exports = productController;
