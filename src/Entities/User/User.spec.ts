import { User } from "./User"
import { UserEntityType } from "./UserEntityType"

describe('Novo Usuário', () => {
	test('criar usuario', () => {
		let userData: UserEntityType = {
			name: 'Fernando',
			email: 'fernandoandradesouto@hotmail.com',
			password: '123'
		}
		let newUser = new User(userData)
		expect(newUser.props).toStrictEqual(userData)
	})
})