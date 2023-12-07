// middleware/autorizacao.js

module.exports = function (tiposPermitidos) {
    return function (req, res, next) {
      if (!tiposPermitidos.includes(req.usuario.tipo)) {
        return res.status(403).json({ message: 'Acesso proibido' });
      }
      next();
    };
  };
  