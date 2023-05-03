const Pool = require("pg").Pool;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: "1970520",
  port: process.env.PGPORT,
});

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM products WHERE ID = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    const products = results.rows;
    res.render("products", { products: products });
  });
};

const getAllProducts = (req, res) => {
  pool.query("SELECT * FROM products ORDER BY ID ASC", (error, results) => {
    if (error) {
      throw error;
    }
    if (!req.session.cart) {
      req.session.cart = [];
    }
    const products = results.rows;
    res.render("allProducts", { products: products, carts: req.session.cart });
  });
};

const createProduct = (req, res) => {
  const { name, price, gender, details, img_link } = req.body;
  pool.query(
    "INSERT INTO products (name, price, gender, details, img_link) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, price, gender, details, img_link],
    (error, results) => {
      if (error) {
        throw error;
      }
      const products = results.rows;
      res.render("products", { products: products });
    }
  );
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, gender, details, img_link } = req.body;
  pool.query(
    "UPDATE products SET name = $1, price = $2, gender =$3, details =$4, img_link $5 WHERE ID = $6",
    [name, price, gender, details, img_link, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM products WHERE ID = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getAddPage = (req, res) => {
  res.render("addProduct");
};

module.exports = {
  updateProduct,
  deleteProduct,
  createProduct,
  getAllProducts,
  getProductById,
  getAddPage,
};
