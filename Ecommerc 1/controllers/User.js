'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.post_user_profile = function post_user_profile (req, res, next) {
  User.post_user_profile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.user_profile = function user_profile (req, res, next) {
  User.user_profile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
