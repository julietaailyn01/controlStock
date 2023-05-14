const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
     sequelize.define('Pendiente', {
      // Atributos de Pendiente
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio:{
        type: DataTypes.INTEGER,
        allowNull:false,
      }
    });
  
  };