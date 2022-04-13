const db = require("../db");

const controller = {
    index: function(req,res) {
        res.render('index', {guitars: db.products })
    },
    login: function (req,res) {
        res.render('login');    
    },
    register: function (req,res) {
        res.render('register');
    },
    searchresults : function(req, res) {
        res.render('search-results', { guitars: db.products });
         },
}
//console.log(db.products)}