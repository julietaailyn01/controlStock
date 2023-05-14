const express = require('express');
const router = express.Router();
const { Pendiente } = require('../models/Pendiente');

// Obtener todos los pendientes del usuario autenticado
router.get('/', async (req, res) => {
  try {
    const pendientes = await Pendiente.findAll({
      where: { UsuarioId: req.user.id },
    });
    res.json(pendientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los pendientes' });
  }
});

// Crear un pendiente para el usuario autenticado
router.post('/', async (req, res) => {
  try {
    const pendiente = await Pendiente.create({
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
      UsuarioId: req.user.id,
    });
    res.json(pendiente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el pendiente' });
  }
});

// Actualizar un pendiente específico
router.put('/:id', async (req, res) => {
  try {
    const pendiente = await Pendiente.findOne({
      where: { id: req.params.id, UsuarioId: req.user.id },
    });
    if (!pendiente) {
      return res.status(404).json({ message: 'Pendiente no encontrado' });
    }
    pendiente.nombre = req.body.nombre || pendiente.nombre;
    pendiente.cantidad = req.body.cantidad || pendiente.cantidad;
    await pendiente.save();
    res.json(pendiente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el pendiente' });
  }
});

// Eliminar un pendiente por ID
router.delete('/:id', async (req, res) => {
    try {
      const pendiente = await Pendiente.findByPk(req.params.id);
      if (!pendiente) {
        return res.status(404).json({ message: 'Pendiente no encontrado' });
      }
      await pendiente.destroy();
      res.json({ message: 'Pendiente eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el pendiente' });
    }
  });
  

module.exports = router;
