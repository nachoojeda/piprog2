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
        createdAt:{
            type:dataTypes.DATE
        },
        updatedAt:{
            type:dataTypes.DATE
        }

    };

    let config = {

        tableName: 'comentarios',
        timeStamps: true,
        underscored: true
    } ;

    const Comentario = sequelize.define(alias,cols,config);
    return Comentario
}