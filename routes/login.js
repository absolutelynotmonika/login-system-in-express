const express = require("express");
const router = express.Router();

let userModule = require("./user.js");

router.route("/")
	.get((req, res) => {
		res.render("login");
	})
	.post((req, res) => {
		let userExists = false;
		let passwordIsRight = false;

		for (const user of userModule.users) {
			userExists = user.getName() == req.body.username;
			passwordIsRight = user.checkPassword(req.body.password);

			if (userExists) break;
		}

		res.render("login_post", {userExists, passwordIsRight, username: req.body.username});
	}
);

module.exports = router
