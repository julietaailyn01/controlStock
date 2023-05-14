var express = require('express');
const {Usuario} = require('../db');
var router = express.Router();
const authController = require('../../controller/UsuarioDB');
module.exports = router;


// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

router.post('/authenticate', authController.authenticate);

// Obtener un usuario por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Agregar un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, usuario, password } = req.body;
  try {
    const user = await Usuario.create({ nombre, usuario, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar un usuario existente
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, usuario, password } = req.body;
  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      await user.update({ nombre, usuario, password });
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar un usuario existente
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
