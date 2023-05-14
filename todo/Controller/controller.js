const express = require("express");
const bodyParser = require("body-parser")
const model = require("../Model/models");

bodyParser.urlencoded({extended: true});

const getAllTodosController =  (req, res)=>{
  const allTodos =  model.getAllTodos();
//  res.render("index", { todos: allTodos });
console.log(allTodos);
}

const addTodosController = (req, res)=>{
  const {todo, description, time_limit} = req.body;
  model.addTodo();
}

const addTodoPage = (req, res) => {
  res.render("addTodo");
}

const deleteTodoController = (req, res)=>{
const id = req.body.id;
controller.deleteTodoController;
}


module.exports = {getAllTodosController, addTodosController, addTodoPage, deleteTodoController};
