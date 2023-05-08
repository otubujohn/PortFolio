'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.add_cart = function add_cart (req, res, next) {
  Cart.add_cart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.remove_cart = function remove_cart (req, res, next) {
  Cart.remove_cart()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
