const express = require('express')
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const middleware = require('../middleware');
const schemas = require('../schemas/schemas');

module.exports = function(){

    router.get('/', usuariosController.getUsuarios);

    router.post('/', middleware(schemas.crearUsuario), usuariosController.registro);

    router.post('/auth', usuariosController.autenticacion);

    /*router.get('/nosotros', proyectosControlller.nosotros);

    router.get('/nuevo-proyecto', proyectosControlller.formularioProyecto);

    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosControlller.nuevoProyecto
    );

    // listar proyecto
    router.get('/proyectos/:url', proyectosControlller.proyectoPorUrl);

    // Actualizar proyecto
    router.get('/proyecto/editar/:id', proyectosControlller.formularioEditar);

    router.post('/nuevo-proyecto/:id', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosControlller.actualizarProyecto
    );

    // eliminar proyecto
    router.delete('/proyectos/:url', proyectosControlller.eliminarProyecto);*/

    return router;
}