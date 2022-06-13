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
        }

    };

    let config = {

        tableName: 'comments',
        timeStamps: false,
        underscored: false
    } ;

    const Comment = sequelize.define(alias,cols,config);
    return Comment
}