const express = require("express");
const router = express.Router();

let userModule = require("./user.js");

router.route("/")
	.get((req, res) => {
		res.send(`
			<form action="/login" method="POST">
			<h1>Login</h1>

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
		let userExists = false;
		let passwordIsRight = false;

		for (const user of userModule.users) {
			userExists = user.getName() == req.body.username;
			passwordIsRight = user.checkPassword(req.body.password);

			if (userExists) break;
		}

		if (!userExists) {
			res.status(404).send(`
				<h1>Login</h1>
				<p>Username doesnt exist</p>
				<a href="/login">Try again</a>
			`);
			return;
		}

		if (!passwordIsRight) {
			res.status(401).send(`
				<h1>Login</h1>
				<p>Wrong password</p>
				<a href="/login">Try again</a>
			`);
			return;
		}

		res.status(201).send(`
			<h1>Login</h1>
			<p>Username: ${req.body.username}</p>
			<a href="/">Home page</a>
		`);
	}
);

module.exports = router
