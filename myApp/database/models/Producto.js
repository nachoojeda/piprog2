module.exports = function (sequelize, dataTypes) {

    let alias = 'Producto' ;

    let cols = {

        id: { 
             autoIncrement: true,
             primaryKey: true,
             type:dataTypes.INTEGER
        },

        titulo: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        foto: {
            type: dataTypes.STRING
        },

        id_usuario: {
            type:dataTypes.INTEGER
        },

        id_comentario: {
            type:dataTypes.INTEGER
        },
        created_at: {
            type:dataTypes.DATE
        },
        updated_at: {
            type:dataTypes.DATE
        }
    };

    let config = {

        tableName: 'productos',
        timeStamps: true,
        underscored: true
    } ;

    const Producto = sequelize.define(alias,cols,config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario, {
            as: 'user',
            foreignKey: 'id_usuario'
        }),
        Producto.hasMany(models.Comentario, {
            as: 'comment',
            foreignKey: 'id_producto'
        })

    }

    /*  Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        })

        Product.hasMany(models.Comment, {
            as: 'comment',
            foreignKey: 'product_id'
        })
    } */
    return Producto
}