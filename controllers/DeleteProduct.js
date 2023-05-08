'use strict';

var utils = require('../utils/writer.js');
var DeleteProduct = require('../service/DeleteProductService');

module.exports.delete_item = function delete_item (req, res, next, id) {
  DeleteProduct.delete_item(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
