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

module.exports.cartInsertPOST = function cartInsertPOST(req, res, next) {
  var body = req.body;
  Cart.getCartByIdAndIsbn(body).then(function (response) {
    let ctrl = JSON.stringify(response);
    let lunghezza = ctrl.length;
    if (lunghezza != 2) {
      Cart.cartUpdate(body).then(function(){
        Cart.getAll().then(function(response){console.log(response)});
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('[{ "status": "aggiornato" }]');
      })
    } else {
      Cart.cartInsertPOST(body).then(function(){
      Cart.getAll().then(function(response){console.log(response)});
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('[{ "status": "inserito" }]');
    })
  }
})};


module.exports.deleteCart = function deleteCart (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Cart.deleteCart(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};