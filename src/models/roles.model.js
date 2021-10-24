const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Roles = db.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
});

module.exports = Roles;