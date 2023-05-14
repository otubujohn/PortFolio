const express = require("express");
const controller = require("./Controller/controller");
const router = express.Router();
const pool = require("./Model/pool");

router.get(
  ["/", "/viewAll"],
  controller.getAllTodosController
);

router.get("/addTodo", controller.addTodoPage);

router.post("/addTodo", controller.addTodosController);

router.post("/delTodo/:id", controller.deleteTodoController);

module.exports = router;
