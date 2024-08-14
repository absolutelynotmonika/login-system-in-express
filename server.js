const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const registerRout = require("./routes/register.js");
const loginRout = require("./routes/login.js");

app.use(bodyParser.urlencoded(({extended: true})));
app.set("view engine", "ejs");

app.use("/login", loginRout);
app.use("/register", registerRout);

app.all("/", (req, res) => {
	res.render("index");
});

app.listen(3000, () => {
	console.log("listening on port 3000")
});
