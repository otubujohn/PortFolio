require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const db = require("./data");
const du = require("./users");
const bodyParser = require("body-parser");
const passport = require("passport");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(route);

const store = new session.MemoryStore();

app.use(
  session({
    secret: "OURlittlescret",
    saveUninitialized: false,
    resave: false,
    cookies: { maxAge: 100 * 60 * 60 * 60, secure: true },
    store,
  })
);

require("./passport");
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hi");
});

app.post(
  ["/login", "/users/:id"],
  passport.authenticate("local", { failureRedirect: "/product" }),
  du.getUserById
);

app.post("/users", du.createUser);

app.route("/product").get(db.getAllProducts).post(db.createProduct);

app
  .route("/product/:id")
  .get(db.getProductById)
  .put(db.updateProduct)
  .delete(db.deleteProduct);

app.listen(process.env.PORT, () => {
  console.log(`server started on ${PORT}`);
});
