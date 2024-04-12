const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Cliente', {
      id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      tDocumento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nDocumento: {
        type: DataTypes.STRING,
        allowNull: false
      }
      ,
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      telefono:{
        type: DataTypes.TEXT,
        allowNull: false
      },
      correo:{
        type: DataTypes.STRING,
        allowNull: true
      },
      direccion:{
        type: DataTypes.STRING,
        allowNull: false
      },
      tPago:{
        type:DataTypes.STRING,
        allowNull: false
      },
      activoDesde: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      estado:{
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