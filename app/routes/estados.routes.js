const router = require('express').Router();

const estadosRoutes = require('../controllers/estados.controllers.js');


router.post('/insertar',estadosRoutes.create);
router.put('/editar/:id',estadosRoutes.edit);
module.exports = router;