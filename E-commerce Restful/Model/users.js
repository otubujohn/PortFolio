const Pool = require("pg").Pool;
const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: "1970520",
  port: process.env.PGPORT,
});

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE ID = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = async (req, res) => {
  const {
    first_name,
    last_name,
    birth_date,
    gender,
    home_address,
    country_of_residence,
    phone,
    pword,
    username,
  } = req.body;
  if (findByUsername(username)) {
    res.redirect("/login");
  }
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(pword, salt);
  pool.query(
    "INSERT INTO users (first_name, last_name, birth_date, gender, home_address, country_of_residence, phone, pword, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
    [
      first_name,
      last_name,
      birth_date,
      gender,
      home_address,
      country_of_residence,
      phone,
      password,
      username,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json(results.rows);
    }
  );
};

const findByUsername = (namer) => {
  pool.query(
    "SELECT * FROM users WHERE username = $1",
    [namer],
    (error, results) => {
      if (error) {
        throw error;
      }
      return namer;
    }
  );
};

const getAllusers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY ID ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    first_name,
    last_name,
    birth_date,
    gender,
    home_address,
    country_of_residence,
    phone,
    pword,
    username,
  } = req.body;
  if (findByUsername(username)) {
    res.redirect("/login");
  }
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(pword, salt);

  pool.query(
    "UPDATE users SET first_name = $1, last_name = $2, birth_date =$3, gender =$4, home_adress=$5, country_of_residence = $6, phone = $7, pword = $8, username = $9 WHERE ID = $10",
    [
      first_name,
      last_name,
      birth_date,
      gender,
      home_address,
      country_of_residence,
      phone,
      password,
      username,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM users WHERE ID = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  createUser,
  getAllusers,
  updateUser,
  findByUsername,
  deleteUser,
  getUserById,
};
