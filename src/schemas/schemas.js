const Joi = require('joi');
const schemas = {
  crearUsuario: Joi.object().keys({
    id_roles: Joi.number().required(),
    nombre: Joi.string().required(),
    correo: Joi.string().required(),
    password: Joi.string().required()
  })
}

module.exports = schemas;