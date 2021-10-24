const { DataTypes } = require('sequelize');
const Roles = require('./roles.model');
const db = require('../database/db');

const Usuarios = db.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_roles: {
    type: DataTypes.INTEGER,
    references: {
      model: Roles,
      key: 'id'
    }
  },
  nombre: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
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

module.exports = Usuarios;