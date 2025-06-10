const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ruta para crear rutina (POST)
router.post('/', async (req, res) => {
  const { nombre, descripcion, ejercicios } = req.body;

  try {
    const nuevaRutina = await prisma.rutina.create({
      data: {
        nombre,
        descripcion,
        ejercicios,
      },
    });

    res.status(201).json(nuevaRutina);
  } catch (error) {
    console.error('Error al crear rutina:', error);
    res.status(500).json({ error: 'No se pudo crear la rutina.' });
  }
});

module.exports = router;

