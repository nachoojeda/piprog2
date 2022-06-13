module.exports = function (sequelize, dataTypes) {

    let alias = 'Product' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        titulo : {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        foto: {
            type: dataTypes.STRING
        }

    };

    let config = {

        tableName: 'product',
        timeStamps: false,
        underscored: false
    } ;

    const Product = sequelize.define(alias,cols,config);
    return Product
}