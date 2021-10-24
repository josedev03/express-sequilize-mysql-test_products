const express = require('express');
const Sequelize = require('sequelize');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const rolesRoutes = require('./routes/roles');
const config = require('./config/config');
const db = require("./database/db");
db.sync()
    .then(()=> console.log('Conectado al servidor bd'))
    .catch(err => console.log(err));

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

app.get('/', (req, res)=>{
  res.json({
    data: {
      message: 'ok'
    }
  })
})

app.use('/usuarios', usuariosRoutes());
app.use('/productos', productosRoutes());
app.use('/roles', rolesRoutes());

app.listen(config.api.port, ()=>{
  console.log(`server running on port ${config.api.port}`)
})