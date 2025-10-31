var express = require('express');
var router = express.Router();
var authenticateToken = require('../middleware/auth');

// BANCO DE DADOS
alunos = [
  {nome: "henning", idade: 40, matricula: 123456}
]

/* GET alunos API. */
router.get('/', authenticateToken, function(req, res, next) {
  res.send( { alunos });
});

/* GET alunos pelo ID API*/ 
router.get('/:id',function(req, res, next) {
  dados = req.params.id
  console.log('veio', dados)
  res.send( { alunos });
});

/* POST alunos API. */
router.post('/', function(req, res, next) {
  dados = req.body
  console.log('veio', dados)
  res.send( { alunos });
});

module.exports = router;