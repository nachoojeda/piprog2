module.exports = function (sequelize, dataTypes) {

    let alias = 'Product' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },

        apellido: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        usuario: {
            type: dataTypes.STRING
        },

        fecha: {
            type: dataTypes.DATE
        },


        foto: {
            type: dataTypes.STRING
        },

        contrasenia: {
            type: dataTypes.STRING
        }, 

        dni: {
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

        tableName: 'users',
        timeStamps: true,
        underscored: false
    } ;

    const User = sequelize.define(alias,cols,config);
    return User
}