// models/tarefa.js

const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  concluida: Boolean,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Tarefa = mongoose.model('Tarefa', tarefaSchema);

module.exports = Tarefa;
