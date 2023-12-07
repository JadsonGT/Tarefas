// middleware/auth.js

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.usuario = decoded;
    next();
  } catch (ex) {
    res.status(401).json({ message: 'Token inválido' });
  }
};
