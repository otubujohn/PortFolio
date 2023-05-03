require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const routes = require("./route");
const cookieParser = require("cookie-parser");
const passport = require("passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
// please how do i store session in database instead?
const store = new session.MemoryStore();
app.use(
  session({
    secret: "OURlittlescret",
    saveUninitialized: false,
    resave: false,
    cookies: { maxAge: 100 * 60 * 60 * 60, secure: false },
    store: store,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.use(routes);
//require("./passport");

const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`server started on ${PORT}`);
});
