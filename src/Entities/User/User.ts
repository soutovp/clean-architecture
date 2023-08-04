import { UserEntityType } from "./UserEntityType";

export class User {
	public props: Required<UserEntityType>
	constructor(props: UserEntityType) {
		this.props = props
	}
}