const express = require("express");
const router = express.Router();

let userModule = require("./user.js");

router.route("/")
	.get((req, res) => {
		res.send(`
			<form action="/register" method="POST">
			<h1>Register</h1>

			<label for="username">Username</label>
			<input type="text" id="username" name="username">
			<br>
			<label for="password">Password</label>
			<input type="text" id="password" name="password">

			<button type="submit">Submit</button>
			</form>
		`);
	})
	.post((req, res) => {
		let username = req.body.username;

		for (const user of userModule.users) {
			if (user.getName() == username) {
				res.send(`
					<h1>Register<h1>
					<p>Username already exists</p>
					<a href="/register">Try again</a>
				`);
				return;
			}
		}

		userModule.users.push(new userModule.User(username, req.body.password));
		res.send(`
			<h1>Register<h1>
			<p>Registered user ${req.body.username}</p>
			<a href="/login">Login</a>
		`);

		console.log(userModule.users);
	}
);

module.exports = router;
