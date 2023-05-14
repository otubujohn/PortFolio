const pool = require("./pool");


const addTodo = ()=>{
  const query = "INSERT INTO todo VALUES ($1, $2, $3) RETURNING *";
  pool.query(query, [todo, description, time_limit], (error, results)=>{
    if(error){
      return new Error("an error has occured");
    }else{
      res.redirect("/");
    }
  })
}

const deleteTodo = ()=>{
const query = "DELETE * FROM todo WHERE ID = $1";
pool.query(query, [id], (error, results)=>{
  if(error){
    return new Error("an error has occured");
  }else{
    res.redirect("/");
  }
})
}


const getAllTodos = ()=>{
  // const query = "SELECT * FROM todo ORDER BY ID ASC";
  pool.query("SELECT * FROM todo ORDER BY id ASC", (error, results)=>{
    if(error){
      throw new Error("an error has occured");
    }
      return results.rows;
  })
}


module.exports = { addTodo, getAllTodos, deleteTodo};
