'use strict';


/**
 * Used to update product stock or inventory or details
 * This path is used to update all product related data. Available only to admin
 *
 * body String A stock string (optional)
 * id String The id of the product.
 * no response value expected for this operation
 **/
exports.update = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

