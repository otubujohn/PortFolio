'use strict';

var utils = require('../utils/writer.js');
var Home = require('../service/HomeService');

module.exports.home = function home (req, res, next) {
  Home.home()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
