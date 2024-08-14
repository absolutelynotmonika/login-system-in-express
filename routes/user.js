let users = [];

class User {
	constructor(name, password) {
		this.username = name;
		this.password = password;
	}

	getName() {
		return this.username;
	}

	checkPassword(password) {
		return this.password == password
	}
}

module.exports = {
	User,
	users
};
