const express = require("express");
const controller = require("./Controller/controller")
const router = express.Router();

router.get(["/", "/viewAll"], controller.getAllTodosController);

router.get("/addTodo", (req, res) => {
  res.render("addTodo");
});

router.post("/addTodo", controller.addTodosController);

router.delete("/delTodo", (req, res) => {
  res.render(delTodo);
});

module.exports = router;
