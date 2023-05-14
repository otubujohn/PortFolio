
const Pool = require("pg").Pool;


const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: "1970520",
  port: process.env.PGPORT,
});

module.exports = pool;
