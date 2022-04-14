const db = require('../db')
const controller = {
    index: function (req, res) {
        let iguitarras = db.products
        res.render('Product',  {'listadoGuitarra': db.products})
       
    },
    productAdd: function(req, res, next) {
        res.render('product-add', { title: 'Express' } + db.products);
      },
      products: function(req, res, next) {
        res.render('product', { title: 'Express' } + db.products);
      },
      searchresults : function(req, res, next) {
        res.render('search-results', { title: 'Express' } + db.products);
      },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    }
}
module.exports = controller