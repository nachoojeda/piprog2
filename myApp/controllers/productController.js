const db = require('../db')

const controller = {
  
  products:function(req, res) {
    //const favoritas = db.products
    const {id} = req.params
    let product = false
    for (let i = 0; i < db.products.length; i++) {
        const productos = db.products[i];
        if (productos.id == id) { product = productos
  
        }
    }
    const comments  = [];
  
    for (let i = 0; i < db.comments.length; i ++){
        if(db.comments[i].texto[i] = product[i]){
            comments.push(db.comments[i]);
        }
    }
  
    return res.render('db.products', { 
        name: db.comments.texto, 
        description: db.comments.nombre,
        image: db.comments.fotoDePerfil,
        comments
     }); 
     
  },

    productAdd: function(req, res, next) {
        res.render('product-add', { title: 'Express' } + db.products);
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

module.exports = controller;
