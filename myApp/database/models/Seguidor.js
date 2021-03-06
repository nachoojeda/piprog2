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
        timeStamps: false,
        underscored: true
    } ;



    const Seguidor = sequelize.define(alias,cols,config);

    Seguidor.associate = function(models){
        Seguidor.belongsTo(models.Usuario, {
            as: 'follower',
            foreignKey: 'id_usuario_seguido'
        })

    }
    return Seguidor
}