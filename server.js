const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const registerRout = require("./routes/register.js");
const loginRout = require("./routes/login.js");

app.use(bodyParser.urlencoded(({extended: true})));
app.use("/login", loginRout);
app.use("/register", registerRout);

app.all("/", (req, res) => {
	res.send(`
		<h1>Welcome</h1>
		<p>What can we do for you?</p>

		<a href="/register">Register</a>
		<a href="/login">Login</a>
	`);
});

app.listen(3000, () => {
	console.log("listening on port 3000")
});
