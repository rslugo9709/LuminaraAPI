const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activoDesde: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }, 
      borrado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
  
  
    },{ timestamps: false });
  };