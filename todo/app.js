const express = require("express");
const router = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true });

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started on " + PORT);
});
