module.exports = function (sequelize, dataTypes) {

    let alias = 'Comment' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },

        texto: {
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

        tableName: 'comments',
        timeStamps: true,
        underscored: false
    } ;

    const Comment = sequelize.define(alias,cols,config);
    return Comment
}