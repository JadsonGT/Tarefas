// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const db = require('./db');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes); // Prefixo '/api' para todas as rotas

// Exemplos de tarefas
(async () => {
  try {
    const tarefa1 = await Tarefa.create({ nome: 'Fazer compras', descricao: 'Comprar mantimentos', concluida: false });
    const tarefa2 = await Tarefa.create({ nome: 'Estudar', descricao: 'Preparar para o exame', concluida: false });
    const tarefa3 = await Tarefa.create({ nome: 'Ir à academia', descricao: 'Fazer exercícios físicos', concluida: true });

    console.log('Tarefas criadas com sucesso:', tarefa1, tarefa2, tarefa3);
  } catch (error) {
    console.error('Erro ao criar tarefas:', error);
  }
})();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

