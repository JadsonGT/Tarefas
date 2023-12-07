const mongoose = require('mongoose');

// Conexão com o MongoDB
const dbURI = 'mongodb+srv://jadson:0lR9XrVitEID8jXP@cluster0.j53kp7y.mongodb.net/Tarefas?retryWrites=true&w=majority';

// Conectar ao MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso.');
});

// Exporte a conexão 
module.exports = connection;
