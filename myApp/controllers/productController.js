const db = require('../db')

const controller = {
  
  products:function(req, res) {
    
    const {id} = req.params
    let product = false
    for (let i = 0; i < db.products.length; i++) {
        const element = db.products[i];
        if (element.id == id) { product = element
  
        }
    }
    const comments  = [];
  
    for (let i = 0; i < db.comments.length; i ++){
        if(db.comments[i].productId = product.id){
            comments.push(db.comments[i]);
        }
    }
  
    return res.render('product', {
        id: product.id, 
        name: product.name, 
        description: product.description,
        imageName: product.imageName,
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
