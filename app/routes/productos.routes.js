const router = require('express').Router();

const productosRoutes = require('../controllers/productos.controllers.js');


router.post('/insertar',productosRoutes.create);
router.put('/editar/:id',productosRoutes.edit);

module.exports = router;
