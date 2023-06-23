// importando o bodyparser e as rotas
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')
// utilizando o express
module.exports = app => {
    // informando que o bodyParser fará o middleware entre as requisições e o express
    app.use(bodyParser.json())
    
    // definindo rotas, (path, função)
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}