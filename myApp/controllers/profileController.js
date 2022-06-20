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

  show: (req,res) => {
    let id = req.params.id; 
   
    usuario.findByPk(id)
    .then(result=>{
        return res.render("profile", {profile: result});
    })},
  login: (req,res) =>{

    return res.render("login")
  },

  procesarLogin: (req,res) => {

    let info = req.body ;
    let errors = {}


    usuario.findOne({where: [{usuario : info.usuario}] }) .then((result) =>{
      if (result != null) {

        let clave = bcryptjs.compareSync(info.contrasenia , result.contrasenia)
        if (clave) {
          
          req.session.user = result.dataValues;
        
            if (req.body.remember_token != undefined) {
              res.cookie('userId' , result.dataValues.id , {maxAge: 1000 * 60 * 5})
            }

            return res.render('profile' , {profile: result}) 
        }

       
      } 

      else {
         {
          errors.message = "El usuario o la contraseña son incorrectos";
          res.locals.errors = errors;
          return res.render('login')
        } 
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
    let foto = req.file.filename;
    let errors = {}; 

    if (info.nombre == "") {
      errors.message = "El campo 'Nombre' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

   else if (info.apellido == "") {
      errors.message = "El campo 'Apellido' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

    else if (info.email == "") {
      errors.message = "El campo 'Email' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

    else if (info.usuario == "") {
      errors.message = "El campo 'Usuario' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

    else if (info.foto == "") {
      errors.message = "El campo de 'Foto' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

    else if (info.contrasenia == "") {
      errors.message = "El campo 'Contraseña' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 

    else if (info.dni == "") {
      errors.message = "El campo 'DNI' no puede estar vacio ";
      res.locals.errors = errors;
      return res.render('register')
    } 
   
    
    else {
      let user = {
        nombre: info.nombre,
        apellido: info.apellido,
        email: info.email,
        usuario: info.usuario,
        fecha: info.fecha,
        foto: foto,
        contrasenia: pass,
        dni: info.dni,
        created_at: new Date(),
        updated_at: new Date(),
        remember_token: false
      }
  
      usuario.create(user)
      .then((result) =>{
        return res.redirect('/users/login')
      } );
    }
    
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