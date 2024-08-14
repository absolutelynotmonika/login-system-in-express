const express = require("express");
const router = express.Router();

let userModule = require("./user.js");

router.route("/")
	.get((req, res) => {
		res.render("register")
	})
	.post((req, res) => {
		let username = req.body.username;
		let userExists = true;

		for (const user of userModule.users) {
			if (user.getName() == username) {
				userExists = true;
			}
		}

		if (userExists) 
			userModule.users.push(
				new userModule.User(
					username, 
					req.body.password
				)
			);

		res.render("register_post", {userExists, username});
	}
);

module.exports = router;
