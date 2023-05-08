'use strict';


/**
 * Used to cancel  an order
 * This path is used to cancel an order with the selected id
 *
 * no response value expected for this operation
 **/
exports.cancel_order = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets order data
 * Used by the user to retrieve all order related data
 *
 * no response value expected for this operation
 **/
exports.get_orders = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get return data
 * This path is used to view all returns, both pending and completed
 *
 * no response value expected for this operation
 **/
exports.get_returns = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all open orders
 * This path is used by admin to get all open orders and all order history and related data
 *
 * no response value expected for this operation
 **/
exports.order_history = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update order and return status
 * Used by admin to update order and return status
 *
 * no response value expected for this operation
 **/
exports.post_order = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

