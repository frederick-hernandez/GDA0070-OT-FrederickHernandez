const router = require('express').Router();
const usuariosRoutes = require('../controllers/usuarios.controllers.js');

router.post('/registrar', usuariosRoutes.create);
router.put('/editar/:idUsuarios', usuariosRoutes.edit);
router.post('/login', usuariosRoutes.login);
module.exports = router;