const express = require("express");
const bodyParser = require("body-parser");
const model = require("../Model/models");

bodyParser.urlencoded({ extended: true });

const getAllTodosController = async (req, res) => {
  model.getAllTodos().then((x) => {
    res.render("index", { todos: x });
    console.log(x);
  });

  //  res.render("index", { todos: allTodos });
};

const addTodosController = async (req, res) => {
  const { todo, description, time_limit } = req.body;
  model
    .addTodo(todo, description, time_limit)
    .then((results) => {
      res.status(201).redirect("/");
    })
    .catch(
      console.log((error) => {
        console.log(`an ${error} has occured`);
      })
    );
};

const addTodoPage = (req, res) => {
  res.render("addTodo");
};

const deleteTodoController = async (req, res) => {
  const id = parseInt(req.body.id);
  model
    .deleteTodo(id)
    .then((results) => {
      res.redirect("/");
    })
    .catch(
      console.log((error) => {
        console.log(`an ${error} has occured`);
      })
    );
};

module.exports = {
  getAllTodosController,
  addTodosController,
  addTodoPage,
  deleteTodoController,
};
