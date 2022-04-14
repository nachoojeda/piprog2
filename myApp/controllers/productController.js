const db = require('../db')
const controller = {
    index: function (req, res) {
        let iguitarras = db.products
        res.render('Product',  {'listadoGuitarra': db.products})
       
    },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    }
}
