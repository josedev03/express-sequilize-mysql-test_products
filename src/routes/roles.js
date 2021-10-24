const express = require('express')
const router = express.Router();
const rolesController = require('../controllers/rolesController');

module.exports = function(){

    router.get('/all', rolesController.getRoles);
    return router;
}