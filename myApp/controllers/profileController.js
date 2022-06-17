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
          
          return res.render('profile' , {profile: result}) 
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
      updated_at: new Date()
    }

    usuario.create(user)
    .then((result) =>{
      return res.redirect('/users/login')
    } )
  },
}
/*
const profileController = {


  index: function (req, res) {
    usuario.findAll()
    .then(data=>{
      return res.render('profile', {
        profile: data})
    })
 },
    
    create: (req, res) => {
    return res.render("register");
  } ,

  store: (req, res) => {

    let info = req.body;
    let user = {
      nombre: info.nombre,
      apellido: info.apellido,
      email: info.email,
      usuario: info.usuario,
      fecha: info.fecha,
      foto: info.foto,
      contrasenia: info.contrasenia,
      dni: info.dni
    }
     usuario.create(user) 
    .then((result) => {
      return res.redirect('/index')

    }) 
  },
 /* edit: (req, res) => {
    let id = req.params.id;
    movie.findByPk(id).then((result) => {

      return res.render("movieEdit", {
        movie: result,
      });
    });
  } } */

  module.exports = profileController