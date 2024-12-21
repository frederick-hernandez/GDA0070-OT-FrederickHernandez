const router = require('express').Router();

const categoriaProductosRoutes = require('../controllers/categoriaProductos.controllers.js');

router.post('/insertar', categoriaProductosRoutes.create);
router.put('/editar/:idCategoriaProductos', categoriaProductosRoutes.edit);
router.delete('/eliminar/:idCategoriaProductos', categoriaProductosRoutes.delete);
router.get('/listar', categoriaProductosRoutes.getAll);

module.exports = router;
