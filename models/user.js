// models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String, // Campo para armazenar a senha hash
  tipo: { type: String, enum: ['admin', 'comum'], default: 'comum' }, // Campo para armazenar o tipo de usuário
  tarefas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarefa' }],
});

// Método para gerar token JWT
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, tipo: this.tipo }, config.jwtSecret);
  return token;
};

// Método para verificar a senha
userSchema.methods.validarSenha = async function (senha) {
  return await bcrypt.compare(senha, this.senha);
};

// Pré-processamento antes de salvar o usuário (hash de senha)
userSchema.pre('save', async function (next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
