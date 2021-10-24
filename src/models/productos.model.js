const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Productos = db.define("productos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  numero_lote: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.FLOAT
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER
  },
  fecha_ingreso: {
    type: DataTypes.DATE
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Productos;