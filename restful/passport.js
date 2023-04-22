const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const du = require("./users");
const bcrypt = require("bcrypt");
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = du.findByUsername(username);
    (err, username) => {
      if (err) return done(err);

      if (!user) return done(null, false);

      const match = bcrypt.compare(password, user.pword);

      if (!match) {
        res.redirect("/login");
      }
      return done(null, user);
    };
  })
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const userD = du.getUserById(id);
  if (err) return done(err);

  return done(null, userD);
});
