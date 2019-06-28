'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.getCartById = function getCartById(req, res, next) {
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
  let id_user = req.session.id_user;

  let status = { status: false }
  if (id_user === undefined) {

    req.session = { id_user: "0" };
  }

  if (req.session.id_user == 0) {
    utils.writeJson(res, status);
  }
  else {

    Cart.getCartByIdAndIsbn(body, id_user).then(function (response) {

      let ctrl = JSON.stringify(response);
      let lenght = ctrl.length;
      if (lenght !== 2) {
        Cart.cartUpdate(body, id_user).then(function () {
          Cart.getAll().then(function (response) { console.log(response) });
        })
      } else {
        Cart.cartInsertPOST(body, id_user).then(function () {
          Cart.getAll().then(function (response) { console.log(response) });
        })
      }

      status.status = true;
      utils.writeJson(res, status)
    })
  }
};


module.exports.deleteCart = function deleteCart(req, res, next) {

  var userId = req.session.id_user;
  let status = { status: false }

  Cart.deleteCart(userId)
    .then(function () {
      Cart.getAll().then(function (response) { console.log(response) });
      status.status = true;
      utils.writeJson(res, status);

    })
    .catch(function () {
      utils.writeJson(res, status);
    });
};

module.exports.deleteBook = function deleteBook(req, res, next) {
  var userId = req.session.id_user;
  var isbn = req.swagger.params['isbn'].value;
  let status = { status: false };

  Cart.deleteBook(userId, isbn)
    .then(function () {
      Cart.getAll().then(function (response) { console.log(response) });
      status.status = true;
      utils.writeJson(res, status);
    }).catch(function () {
      utils.writeJson(res, status);
    });
};