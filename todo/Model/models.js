const pool = require("./pool");

const addTodo = (todo, description, time_limit) => {
  //const query = "INSERT INTO todo VALUES ($1, $2, $3) RETURNING *";
  return new Promise((res, rej) => {
    pool.query('INSERT INTO todo (todo, description, time_limit) VALUES ($1, $2, $3) RETURNING *', [todo, description, time_limit], (error, results) => {
      if (error) {
        rej(error);
        throw error;
      }
      res(results.rows);
    });
  });
};

const deleteTodo = (id) => {
  const query = 'DELETE FROM todo WHERE id = $1';
  return new Promise((res, rej) => {
    pool.query(query, [id], (error, results) => {
      if (error) {
        rej(error);
        throw error;
      }
      res(results.rows);
    });
  });
};

const getAllTodos = () => {
  return new Promise((res, rej) => {
    pool.query("SELECT * FROM todo ORDER BY id ASC", (error, results) => {
      if (error) {
        rej(error);
        throw error;
      }
      res(results.rows);
      console.log();
    });
  });
};

module.exports = { addTodo, getAllTodos, deleteTodo };
