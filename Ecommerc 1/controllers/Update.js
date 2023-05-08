'use strict';

var utils = require('../utils/writer.js');
var Update = require('../service/UpdateService');

module.exports.update = function update (req, res, next, body, id) {
  Update.update(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
