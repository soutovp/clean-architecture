import CadastroEntity from './CadastroEntity.js'
import createDBConnection from '../../services/createDBConnection.js'
const db = createDBConnection()
const Cadastro = (req, res) => {
	console.log(`> [Client] Enviando dados de cadastro ao servidor...`)
	const data = CadastroEntity(req.body)
	db.connection.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', data, (err, results) => {
		if (err) {
			console.error(`> [SQL] Erro ao salvar os dados no banco de dados.\n> [SQL] ${err}`)
			console.log('------------------------------------')
			res.status(500).send(`> [SQL] Erro ao salvar os dados no banco de dados`)
		} else {
			console.log('> [SQL] Dados salvos com sucesso!')
			console.log('------------------------------------')
			res.redirect('/');
		}
	})
}

const CadastroPage = (req, res) => {
	res.redirect('./create_account/')
}

export { Cadastro, CadastroPage }