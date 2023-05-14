const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const product = require('./products.js');
const usuario = require('./usuario.js');
const pendiente = require('./pendiente.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/products', product);
router.use('/usuario', usuario);
router.use('/pendiente', pendiente);


module.exports = router;
 