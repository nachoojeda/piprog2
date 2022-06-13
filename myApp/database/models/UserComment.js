module.exports = function (sequelize, dataTypes) {

    let alias = 'Product' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        id_users : {
            type: dataTypes.INTEGER
        },

        id_comments : {
            type: dataTypes.INTEGER
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