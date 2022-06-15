module.exports = function (sequelize, dataTypes) {

    let alias = 'Usuario' ;

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

        productos: {
            type: dataTypes.INTEGER

        },

        seguidores: {
            type: dataTypes.INTEGER

        },

        comentarios: {
            type: dataTypes.INTEGER

        },
        created_at: {
            type:dataTypes.DATE
        },
        updated_at: {
            type:dataTypes.DATE
        }

    };

    let config = {

        tableName: 'usuarios',
        timeStamps: true,
        underscored: true
    } ;

    const Usuario = sequelize.define(alias,cols,config);
    return Usuario
}