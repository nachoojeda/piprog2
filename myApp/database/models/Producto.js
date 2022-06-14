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
        }

    };

    let config = {

        tableName: 'productos',
        timeStamps: false,
        underscored: true
    } ;

    const Producto = sequelize.define(alias,cols,config);
    return Producto
}