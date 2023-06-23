// iniciando o servidor local importando o express e as rotas
const express = require('express');
const routes = require('./routes')

// iniciando o express
const app = express();

// informando o número da port do servidor
const port = 3000;

// chamando o arquivo de rortas
routes(app)

// vigia o servidor, (port, console.log)
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app