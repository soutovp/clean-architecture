const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault()

	const email = document.getElementById('email').value
	const senha = document.getElementById('senha').value
	const user = {
		email: email,
		senha: senha
	}
	console.log(JSON.stringify({ email, senha }))
	fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ email, senha })
	})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem('token', data.token)

			window.location.href = '/inicio'
		})
		.catch(error => console.error(`Erro ao fazer o login: ${error}`))
})