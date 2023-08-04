import mysql from 'mysql2'
function createDBConnection() {
	const db = {}
	const database = {
		host: 'localhost',
		user: 'root',
		password: 'Fs@982357',
		database: 'caloric'
	}
	const connection = mysql.createConnection(database)
	function connect() {
		return connection.connect((err) => {
			if (err) {
				console.error(`> [SQL] Erro ao conectar ao banco de dados:\n > [SQL] ${err}`)
			} else {
				console.log(`> [SQL] Conexão com o banco de dados estabelecida!`)
			}
		})
	}
	db.connect = connect
	db.connection = connection
	db.jwtSecret = 'klapalcius'
	return db
}
export default createDBConnection