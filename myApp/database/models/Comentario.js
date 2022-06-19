module.exports = function (sequelize, dataTypes) {

    let alias = 'Comentario' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING
        },

        id_usuario: {
            type: dataTypes.INTEGER
        },

        id_producto: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type:dataTypes.DATE
        },
        updated_at: {
            type:dataTypes.DATE
        }

    };

    let config = {

        tableName: 'comentarios',
        timeStamps: true,
        underscored: true
    } ;

    const Comentario = sequelize.define(alias,cols,config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as: 'comentarioUsuario',
            foreignKey: 'id_comentario'
        }),
        Comentario.belongsTo(models.Producto, {
            as: 'comentarioProducto',
            foreignKey: 'id_comentario'
        })
    }

    /* Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
        Comment.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })

    } */
    return Comentario
}