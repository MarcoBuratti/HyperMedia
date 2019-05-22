'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.getCartById = function getCartById (req, res, next) {
  var cartId = req.swagger.params['cartId'].value;
  Cart.getCartById(cartId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCartyID = function postCartyID (req, res, next) {
  var bookID = req.swagger.params['bookID'].value;
  Cart.postCartyID(bookID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
