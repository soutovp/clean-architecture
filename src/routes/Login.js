import Client from "../entities/Client.js"
import createDBConnection from "../services/createDBConnection.js"
const db = createDBConnection()
const Login = (req, res) => {
	const client = Client(req.body)
	console.log(`> [Client] Cliente ${client[0]} entrando no servidor...`)
	db.connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', client, (err, results) => {
		if (err) {
			console.error(`Erro ao verificar as credenciais: ${err}`)
			res.status(500).send('Erro ao verificar as credenciais')
		} else if (results.length === 0) {
			console.error('Login ou senha incorretos.')
			console.log(results)
			res.redirect('/')
		} else {

			console.log(`> [SQL] Login efetuado com sucesso do usuário ${results[0].nome}`)
			console.log(results)
			res.redirect('/')
		}
	})
}

export default Login