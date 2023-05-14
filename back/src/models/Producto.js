const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    descripcion:{
      type: DataTypes.STRING,
      allowNull: false
    },  
    stock:{
        type: DataTypes.STRING,
        allowNull:false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    precio:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true
  });

};  