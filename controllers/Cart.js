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
  Cart.cartInsertPOST(body).then(function (response) {
    console.log(response);
    let ctrl = JSON.stringify(response);
    let lunghezza = ctrl.length;
    if (lunghezza != 2) {
      User.userRegisterPOST(body)
        .then(function () {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end('[{ "status": "eskere" }]');
        })
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('[{ "status": "eskere" }]');
    }
  })
};
