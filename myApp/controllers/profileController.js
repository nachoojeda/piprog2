const db = require('../db')

const controller = {
    index: function (req, res) {
        res.render('index', {productos: db.products,comments: db.comentarios}) 
    },
<<<<<<< HEAD
    login: function(req, res,) {
        res.render('login', { title: 'Express' });
      
    },
    register: function(req, res,) {
        res.render('register', { title: 'Express' });
    },
    profile: function(req, res,) {
        res.render('profile', { title: 'Express' } + db.profile);
    
    },
    profileEdit : function(req, res,) {
=======
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
>>>>>>> 69a0961348856d163622ca3fece9af72f85ed20d
        res.render('profile-edit', { title: 'Express' });
      },
}

module.exports = controller;