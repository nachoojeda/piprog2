const db = require('../db')

const controller = {
    index: function (req, res) {
        res.render('index', {db})
    },
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
        res.render('profile-edit', { title: 'Express' });
      },
}

module.exports = controller;