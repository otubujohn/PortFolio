'use strict';

var utils = require('../utils/writer.js');
var Checkout = require('../service/CheckoutService');

module.exports.checkout = function checkout (req, res, next) {
  Checkout.checkout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
