const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Producto', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      TipoServicio:{
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion:{
        type: DataTypes.STRING,
        allowNull: false
      },
      precio:{
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
  
  
    },{ timestamps: false });
  };