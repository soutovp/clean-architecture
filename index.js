import express from 'express'
import bodyParser from 'body-parser'
import Router from './src/routes/Router.js'
const app = express()
const port = 3000

import createDBConnection from './src/services/createDBConnection.js'
import { Login, LoginPage } from './src/routes/Login/Login.js'
import { Cadastro, CadastroPage } from './src/routes/Cadastro/Cadastro.js'
import authenticateToken from './src/services/auth.js'
const db = createDBConnection()
db.connect()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.get('/', LoginPage)
app.post('/api/login', Login)

app.post('/api/cadastro', Cadastro)

app.get('/cadastro', CadastroPage)
app.use('/inicio', authenticateToken)
app.use('/', Router)

app.listen(port, (req, res) => {
	console.log(`> [Server] Iniciando servidor na porta ${port}`)
})