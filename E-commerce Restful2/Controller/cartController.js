const Pool = require("pg").Pool;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: "1970520",
  port: process.env.PGPORT,
});

// this whole function does not work, pls is there a better way to impleement additon to cart?
// Also i am out of ideas how to implelmet increasing the quantity of products when same product is added to cart

const addToCart = (req, res) => {
  const getInitalCart = "SELECT * FROM initial-carts WHERE ID = $1";
  let bag;
  if (req.user) {
    // get items from the inital cart when user was a guest
    pool.query(getInitalCart, [session_id], (error, results) => {
      if (error) {
        console.log(error);
      }
      bag = results.rows;
      // if there are indeed items, use a foreach to add each into the final-carts which now has a userid
      if (bag.length > 0) {
        bag.forEach((item) => {
          pool.query(
            "INSERT INTO final-carts (product_name, product_id, user_id, product_price) VALUES ($1, $2, $3, $4)",
            [
              item.product_name,
              item.product_id,
              item.user_id,
              item.product_price,
            ],
            (error, secondresults) => {
              if (error) {
                console.log(error);
              }
              console.log("item added");
              res.redirect("/product");
            }
          );
        });
      } else {
        // if there is no item, go ahead and add the item from the request body into the final-cart
        pool.query(
          "INSERT INTO final-carts (product_name, product_id, user_id, product_price) VALUES ($1, $2, $3, $4)",
          [product_name, product_id, user_id, product_price],
          (error, thirdresults) => {
            if (error) {
              console.log(error);
            }
            console.log("item added");
            res.redirect("/product");
          }
        );
      }
    });
  } else {
    // if the user is not logged in, keep adding items into the inital cart with a session id
    pool.query(
      "INSERT INTO initial-carts (product_name, product_id, user_id, product_price) VALUES ($1, $2, $3, $4)",
      [product_name, product_id, user_id, product_price],
      (error, thirdresults) => {
        if (error) {
          console.log(error);
        }
        console.log("item added");
        res.redirect("/product");
      }
    );
  }
};

module.export = { addToCart };
