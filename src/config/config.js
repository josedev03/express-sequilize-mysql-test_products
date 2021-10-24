const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '../env/.env')});

module.exports = {
  api: {
    port: process.env.PORT || 4000
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}