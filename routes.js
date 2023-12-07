// routes.js

const express = require('express');
const User = require('./models/user');
const Tarefa = require('./models/tarefa');
const authMiddleware = require('./middleware/auth');
const autorizacaoMiddleware = require('./middleware/autorizacao');

const router = express.Router();

// Rota para listagem de tarefas com paginação e busca
router.get('/tarefas', authMiddleware, async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    let query = {};

    // Adicione a lógica de busca, se houver um termo de pesquisa
    if (search) {
      query = { nome: { $regex: new RegExp(search, 'i') } };
    }

    const tarefas = await Tarefa.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota protegida para listar todas as tarefas (apenas para administradores)
router.get('/tarefas/admin', authMiddleware, autorizacaoMiddleware(['admin']), async (req, res) => {
  try {
    const tarefas = await Tarefa.find({});
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Outras rotas existentes...

module.exports = router;
