const guitarras = require('../db')
const controller = {
    index: function(req,res) {
        let iguitarras = guitarras
        res.render ('Product' , {'listadoGuitarra': iguitarras})
    },
    login: function(req,res) {
        res.render ('login')
    },
    register: function (req,res) {
        res.render('register')
    }
}
module.exports = controller;