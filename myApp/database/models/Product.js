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
        },
        createdAt:{
            type:dataTypes.DATE
        },
        updatedAt:{
            type:dataTypes.DATE
        }

    };

    let config = {

        tableName: 'products',
        timeStamps: true,
        underscored: true
    } 

    const Product = sequelize.define(alias,cols,config);
    return Product
}