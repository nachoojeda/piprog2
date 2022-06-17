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
  }*/ } 

  module.exports = profileController