/*const db = require('../db')

const controller = {
    index: function (req, res) {
       // res.render('index', {productos: db.products,comments: db.comentarios}) 
    },
    login: function(req, res) {
        res.render('login'); 
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
       // res.render('profile', {profile: db.profile,productos: db.products,comments: db.comentarios});
    },
    profileEdit : function(req, res) {
        res.render('profile-edit', { title: 'Express' });
      },
}

module.exports = controller; */

const db = require('../database/models');

const usuario = db.Usuario;
const bcryptjs = require("bcryptjs")

const profileController ={

  login: (req,res) =>{

    return res.render("login")
  },

  procesarLogin: (req,res) => {

    let info = req.body ;

    usuario.findOne({

      where: [{usuario : info.usuario}]
    }) .then((result) =>{
      if (result != null) {

        let clave = bcryptjs.compareSync(info.contrasenia , result.contrasenia)
        if (clave) {
          
          req.session.user = result.dataValues;
        
            if (req.body.remember_token != undefined) {
              res.cookie('userId' , result.dataValues.id , {maxAge: 1000 * 60 * 5})
            }

          return res.redirect("/") 
        }
         else {
          return res.send("Existe el usuario " + info.usuario + " y la clave es incorrecta")
        }
      } 
      else {
        return res.send("No existe el usuario " + info.usuario)
      }
    })
  },
  logout: (req,res) => {
    req.session.destroy();
    res.clearCookie('userId')
    return res.redirect('/')
  },

  register: (req,res) =>{

    return res.render("register")
  },

  procesarRegister: (req,res) =>{

    let info = req.body;  
    let pass = bcryptjs.hashSync(info.contrasenia , 10) 
    let user = {
      nombre: info.nombre,
      apellido: info.apellido,
      email: info.email,
      usuario: info.usuario,
      fecha: info.fecha,
      foto: info.foto,
      contrasenia: pass,
      dni: info.dni,
      created_at: new Date(),
      updated_at: new Date(),
      remember_token: false
    }

    usuario.create(user)
    .then((result) =>{
      return res.redirect('/users/login')
    } )
  },

  edit: (req,res) =>{
    let id = req.params.id;
    usuario.findByPk(id)
    .then((info)=>{
      let pass = bcryptjs.hashSync(info.contrasenia , 10) 
      let profileEdit = {
  
      nombre: info.nombre,
      apellido: info.apellido,
      email: info.email,
      usuario: info.usuario,
      fecha: info.fecha,
      foto: info.foto,
      contrasenia: pass,
      dni: info.dni,
      id:id
      }
      return res.render('profile-edit' , {profile: profileEdit})
    })
  },

  update: (req,res) =>{

    let profileEdited = req.body;
  
   let id = req.params.id
  
   usuario.update({
  
    nombre: profileEdited.nombre,
    apellido: profileEdited.apellido,
    email: profileEdited.email,
    usuario: profileEdited.usuario,
    fecha: profileEdited.fecha,
    foto: profileEdited.foto,
    contrasenia: profileEdited.contrasenia,
    dni: profileEdited.dni
    
    } ,
  
    {
  
      where: [{id:id}]
    }
   )
   .then(()=>{
    return res.redirect('/')
   })
  }  

}



  module.exports = profileController