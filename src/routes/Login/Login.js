import createDBConnection from "../../services/createDBConnection.js"
import jwt from 'jsonwebtoken'
const db = createDBConnection()
const Login = (req, res) => {
	const user = req.body
	console.log(user.email)
	db.connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [user.email, user.senha], (err, results) => {
		if (err) {
			console.error(`> [SQL] Erro ao verificar as credenciais: ${err}`)
			res.status(500).send(`> [SQL] Erro ao verificar as credenciais: ${err}`)
		} else if (results.length === 0) {
			console.log('> [SQL] Login ou senha incorretos.\n')
			res.status(401).send({ 'error': '> [SQL] Login ou senha incorretos.' })
		} else {
			console.log(`> [Server] Login efetuado com sucesso do usuário ${results[0].nome}`)
			const token = jwt.sign(results[0].email, db.jwtSecret);
			res.json({ token })
		}
	})
}

const LoginPage = (req, res) => {
	res.redirect('/')
}

export { Login, LoginPage }