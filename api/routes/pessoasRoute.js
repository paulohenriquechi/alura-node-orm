// importando router do express
const { Router } = require('express')

// importando o controller dessa rota
const PessoaController = require("../controllers/PessoaController")

// utilizando o metodo router do express
const router = Router()

// criando a rota, e passando a função do controlador para retornar toda as informações
router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
// :id é o parametro que será passado para o controller na busca do banco de dados
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.deletaPessoa)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)

// exportando
module.exports = router


