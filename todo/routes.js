const express = require("express");

const router = express.Router();

router.get(["/", "/viewAll"], (req, res) => {
  res.render("index", { todo: "hello", body: "world" });
});

router.get("/addTodo", (req, res) => {
  res.render("addTodo");
});

router.post("/addTodo", (req, res) => {
  res.render("addTodo");
});

router.delete("/delTodo", (req, res) => {
  res.render(delTodo);
});

module.exports = router;
