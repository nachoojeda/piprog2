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
    return Producto
}