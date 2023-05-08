'use strict';

var utils = require('../utils/writer.js');
var AddItem = require('../service/AddItemService');

module.exports.get_add_item = function get_add_item (req, res, next) {
  AddItem.get_add_item()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_add_item = function post_add_item (req, res, next) {
  AddItem.post_add_item()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
