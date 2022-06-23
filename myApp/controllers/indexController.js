const db = require('../database/models');

const producto = db.Producto;
const op = db.Sequelize.Op;

const indexController = {


    index: (req, res) => {



        producto.findAll({
                    include: [{
                            association: "user"
                        },


                    ],

                    order: [
                        ["titulo", "ASC"]
                    ],
                    limit: 12
                }

            )

            .then(data => {
                return res.render('index', {
                    productos: data
                })
            })

            .catch(error => {
                return res.send(error)
            })
    },

    showOne: (req, res) => {
        let busqueda = req.query.search;

        producto.findAll({
                include: [{
                    association: 'user'
                }, {
                    association: 'comment',
                    include: {
                        association: 'user'
                    }
                }],

                where: {
                    [op.or]: [{
                            titulo: {
                                [op.like]: '%' + busqueda + '%'
                            }
                        },
                        {
                            descripcion: {
                                [op.like]: '%' + busqueda + '%'
                            }
                        }

                    ]
                }

            })

            .then((result) => {
            
                    return res.render("search-results", {
                        productos: result
                    })
                

            })
    }
}

module.exports = indexController;