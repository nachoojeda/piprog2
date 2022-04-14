const db = require("../db");

const controller = {
    index:  function(req, res, next) {
        res.render('index', { title: 'Express',} + db.products);
      
    },
    login: function (req,res) {
        res.render('login');    
    },
    register: function (req,res) {
        res.render('register');
    },
    searchresults : function(req, res, next) {
        res.render('search-results', { title: 'Express' } + db.products);
      }
}
 module.exports = controller