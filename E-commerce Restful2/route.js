require("dotenv").config();
const express = require("express");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("./Controller/adminController");
const du = require("./Controller/userControls");
const passport = require("passport");
const router = express.Router();
const cart = require("./Controller/cartController");

// passport local strategy setup
passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    async (username, password, done) => {
      const user = await du.findByUsername(username);
      // return error if an errors found
      /*if (err) {
      return done(err);
    }*/
      // if user does not exist
      if (!user) {
        console.log("user does not exist");
        return done(null, false, { message: "user does not exist" });
      }

      // use bcrypt to compare passwords
      const match = await bcrypt.compare(password, user.pword);
      if (!match) {
        console.log("Incorrect password");
        return done(null, false, { message: "Incorrect password" });
      }
      console.log("success");
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, { id: user.id, username: user.username });
});

passport.deserializeUser((id, done) => {
  const userD = du.getUserById(id);
  if (err) return done(err);

  return done(null, userD);
});

// ROUTES

router.get("/", db.getAllProducts);

router.post(
  ["/users/login", "/users/:id"],
  passport.authenticate("local", {
    failureRedirect: "/users/login",
  }),

  // redirect to see all prdoucts upon login
  db.getAllProducts
);
/**/

// The app breaks when tis code is uncommented
// router.post("/addtocart", cart.addToCart);

router.get(["/users/login", "/users/:id"], (req, res) => {
  res.render("login");
});

router.get("/users", (req, res) => {
  res.render("register");
});

router.post("/logout", (req, res, cb) => {
  req.logOut((err) => {
    if (err) {
      return cb(err);
    }
    res.redirect("/users/login");
  });
});

router.post("/users", du.createUser);

router.get("/product", db.getAllProducts);
router.post("/product", db.createProduct);

router.get("/product/:id", db.getProductById);

router.get("/admin/product", db.getAddPage);

router.put("/admin/product", db.updateProduct);

router.delete("/admin/product", db.deleteProduct);

router.post("/admin/product", db.createProduct);

module.exports = router;
