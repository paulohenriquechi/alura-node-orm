// fazendo a conexão com o o model
const database = require('../models')

class PessoaController {
    // definir os metodos que serão utilizados

    // Read 
    static async pegaTodasAsPessoas(req, res){
        try {
            // salvando em uma variavel, acessando a database, na tabela pessoas e utilizando a query do sequelizer
            const todasAsPessoas = await database.Pessoas.findAll()
            // enviando resposta, com o status e transformando em json
            return res.status(200).json(todasAsPessoas)            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        // recebendo o id via parametro da requisição
        const { id } = req.params
        try {
            // query para buscar um item em especifico
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    // primeiro id: coluna da tabela, segundo id: informação recebida via parametro da requisição
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criaPessoa(req, res){
        // recebendo as informações do POST do corpo da requisição
        const novaPessoa = req.body
        try {
            // criando um novo registro no banco de dados de acordo com os dados
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }
    // Update
    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    // Delete
    static async deletaPessoa(req, res){
        const { id } = req.params 
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message) 
        }
    }

    static async pegaUmaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)             
        }
    }

    static async criaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async atualizaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            })
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async deletaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                }
            })
            return res.status(200).json({mensagem: `id ${matriculaId} deletado com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }
}

module.exports = PessoaController