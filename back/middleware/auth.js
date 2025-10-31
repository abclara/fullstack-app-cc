const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // PROTEGE A ROTA
  const authHeader = req.headers['authorization']; //VAI NO CABEÇALHO DA REQUISIÇÃO E PEDE O TOKEN
  const token = authHeader && authHeader.split(' ')[1]; // formato "Bearer token"

  if (!token) return res.status(401).json({ message: 'Token não fornecido' }); //SE NÃO TIVER TOKEN

  //se o token existir, verifica se é válido
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;