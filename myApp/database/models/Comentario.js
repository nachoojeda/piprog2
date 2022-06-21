const db = require(".");

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
            foreignKey: 'id_usuario'
        }),
        Comentario.belongsTo(models.Producto, {
            as: 'comentarioProducto',
            foreignKey: 'id_producto'
        })
    }

    return Comentario;
}