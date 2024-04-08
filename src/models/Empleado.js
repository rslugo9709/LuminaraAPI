const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Empleado', {
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
      fechaIngreso: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      salario:{
        type: DataTypes.FLOAT,
        allowNull: false
      },
      cargo:{
        type: DataTypes.STRING,
        allowNull: false
      }
  
  
    },{ timestamps: false });
  };