require("dotenv").config();
const express = require("express");
const router = require("./routes");
//const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started on " + PORT);
});
