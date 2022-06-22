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
        ["comment" , "id","DESC"]
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


  let product = {//creamos la producto

    titulo: info.titulo,
    descripcion: info.descripcion,
    foto: "",
    created_at: info.created_at,
    id_usuario: req.session.user.id,
   
  } 
 
if (!req.file ){
  product.foto = "guitardef.jpeg"
}
else {
product.foto = req.file.filename;
  
}
   /*  res.send(info)  */
    producto.create(product)

  .then((result) => {return res.redirect('/')}
  )
  
 
},

edit: (req,res) =>{
  let id = req.params.id;
  let errors = {}
  
  if (req.body.foto) {
    foto = req.file.filename

  } else{
   foto = req.body.fotovieja
  }
  if (req.session.user != undefined) {
    producto.findByPk(id)
    .then((info)=>{
     
      let productEdit = {
  
      titulo: info.titulo,
      descripcion: info.descripcion,
      foto: foto,
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
    created_at: productEdited.created_at,
    updated_at: Date.now()
   
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

    producto.destroy({where:[{id:borrarProducto}]})
    .then((result)=>{
      return res.redirect("/")
    })
}
 ,

createComment: function (req, res) { 
  let info = req.body
  let comment = { // No ponemos el id porque es autoincremental
      // Saco los valores de info para llenar el objeto literal (email, etc.)
      id_producto : info.id_producto, // Tengo que ir a register.ejs para fijarme que name tiene en el input
      id_usuario : info.id_usuario, // Tengo que ir a register.ejs para fijarme que name tiene en el input
     texto : info.texto,
      created_at : new Date(), // Esto no esta en info. Por eso voy a mySQL y me fijo que tipo de dato son
      
  }

  /* Almacenando el registro del usuario */
  comentario.create(comment)
  .then((result) =>{
      return res.redirect("/product/id/"+info.id_producto) // Lo quiero redirigir para que se logee
  }).catch((err) => {
      console.error(err)
  }); // Creando el usuario en la base de datos
  
 
}

}





module.exports = productController;
