const express = require('express')
const router = express.Router();
const productosController = require('../controllers/productosController');

module.exports = function(){

    router.get('/', productosController.getProductos);

    router.get('/:id', productosController.getProductos);

    router.post('/', productosController.registro);

    router.put('/:id', productosController.actualizar);

    router.delete('/:id', productosController.eliminar);
    return router;
}