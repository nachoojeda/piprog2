module.exports = function (sequelize, dataTypes) {

    let alias = 'Seguidor' ;

    let cols = {

        id: {
            autoIncrement: true, 
            primaryKey: true,
            type:dataTypes.INTEGER
        },
        
        id_usuario_seguidor: {
            type: dataTypes.INTEGER
        },

        id_usuario_seguido: {
            type: dataTypes.INTEGER
        },
       
    };

    let config = {

        tableName: 'seguidores',
        timeStamps: true,
        underscored: true
    } ;

    const Seguidor = sequelize.define(alias,cols,config);
    return Seguidor
}