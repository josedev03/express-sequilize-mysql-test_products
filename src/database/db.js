// const mysql = require('mysql');
const config = require('../config/config');
// const connection = mysql.createConnection({
//   host: config.mysql.host,
//   user: config.mysql.user,
//   password: config.mysql.password,
//   database: config.mysql.database
// });

// connection.connect((error)=>{
//   if(error){
//     console.log('Error conexion database: '+ error);
//     return;
//   }

//   console.log('Conectado a la base de datos');
// });

// module.exports = connection;


const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: config.mysql.dialect,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

module.exports = db;