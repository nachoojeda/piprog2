const db = require('../database/models');

const producto = db.Producto;
const comentario = db.Comentario
const productController = {
  
   show: (req,res) => {
  let id = req.params.id; 
  let filtro = {
    include: [
        {association: "user"},
        {association: "comment", include: "user"}

    ], 

    order:[
        ["created_at","DESC"]
    ]
}
 
  producto.findByPk(id ,filtro)
  
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

 /* comments: (req, res) => {
  if (req.session.user = undefined) {
      res.redirect('/users/login');

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
  } 
  else {
    errors.message = "Para Comentar un producto debes estar logueado";
    res.locals.errors = errors;
    return res.render('login')
  }
},*/
createComment: function (req, res) { 
  let info = req.body
  let comentario = { // No ponemos el id porque es autoincremental
      // Saco los valores de info para llenar el objeto literal (email, etc.)
      product_id : info.id_productos, // Tengo que ir a register.ejs para fijarme que name tiene en el input
      user_id : info.id_usuario, // Tengo que ir a register.ejs para fijarme que name tiene en el input
     comentario : info.comentario,
      created_at : new Date(), // Esto no esta en info. Por eso voy a mySQL y me fijo que tipo de dato son
      updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
  }

  /* Almacenando el registro del usuario */
  db.Comentario.create(comentario)
  .then((result) =>{
      return res.redirect("/product/"+info.id_Product) // Lo quiero redirigir para que se logee
  }).catch((err) => {
      console.error(err)
  }); // Creando el usuario en la base de datos
  
 
}

}





module.exports = productController;
