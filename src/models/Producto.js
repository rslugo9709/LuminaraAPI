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
      fabricante:{
        type: DataTypes.STRING,
        allowNull: false
      },
      descripcion:{
        type: DataTypes.STRING,
        allowNull: false
      },
      categorias:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      uVendidas:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
  
  
    },{ timestamps: false });
  };