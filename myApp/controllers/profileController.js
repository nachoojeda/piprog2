const db = require('../db')

const controller = {
    index: function (req, res) {
        res.render('index', {productos: db.products,comments: db.comentarios}) 
    },
    login: function(req, res) {
        res.render('login'); 
    },
    register: function(req, res) {
        res.render('register');
    },
    profile: function(req, res) {
        res.render('profile', {profile: db.profile,productos: db.products,comments: db.comentarios});
    },
    profileEdit : function(req, res) {
        res.render('profile-edit', { title: 'Express' });
      },
}

module.exports = controller;