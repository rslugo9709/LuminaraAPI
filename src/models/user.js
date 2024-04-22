const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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