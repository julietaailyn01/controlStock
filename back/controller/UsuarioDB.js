const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Usuario} = require('../src/db');



exports.authenticate = async (req, res) => {
  const { usuario, password } = req.body;


  try {
    // Buscar usuario en la base de datos
    const usuarioo = await Usuario.findOne({ where: { usuario: usuario } }); // Usar modelo en consulta

    if (!usuarioo) {
      return res.status(401).json({ msg: 'Usuario o contraseña incorrectos' });
    }

    // Verificar contraseña

    if (password !== usuarioo.password) {
       
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    return res.status(200).json(true);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Hubo un error al autenticar al usuario' });
  }
};

