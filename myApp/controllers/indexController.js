const db = require("../db");

const controller = {
    index: function(req,res) {
        res.render('index', { title: 'Express' })
    },
    login: function (req,res) {
        res.render('login');    
    },
    register: function (req,res) {
        res.render('register',  { title: 'Express' });
    },
    searchresults : function(req, res) {
        res.render('search-results', { title: 'Express' });
         },
}
//console.log(db.products)}