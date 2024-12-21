const router = require('express').Router();

const estadosRoutes = require('../controllers/estados.controllers.js');


router.post('/insertar',estadosRoutes.create);

module.exports = router;