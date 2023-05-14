const express = require("express");
const controller = require("./Controller/controller")
const router = express.Router();
const pool = require("./Model/pool");

router.get(["/", "/viewAll"], /*controller.getAllTodosController */ (req, res)=>{
  //const allTodos =  model.getAllTodos();
//  res.render("index", { todos: allTodos });
let allTodos;
pool.query('SELECT * FROM todo ORDER BY id ASC', (error, results)=>{
  if(error){
    throw error();
  }
    allTodos = results.rows;
})
console.log(allTodos);
}
);

router.get("/addTodo", controller.addTodoPage);

router.post("/addTodo", controller.addTodosController);

router.delete("/delTodo", (req, res) => {
  res.render(delTodo);
});

module.exports = router;
