const {Router} = require ('express')
const app = require('..')
const PessoaController = require ('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaPessoasAtivas)

router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.apagaPessoa)

router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

router.post('pessoas/:estudanteId/matricula/:matriculaId/restaura', 
PessoaController.restauraMatricula)

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)

router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)

router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)

module.exports = router