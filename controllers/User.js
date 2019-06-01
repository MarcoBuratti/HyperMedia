'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userLoginPOST = function userLoginPOST(req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  User.userLoginPOST(username, password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userRegisterPOST = function userRegisterPOST(req, res, next) {
  var body = req.body;
  console.log(body);
  User.userRegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById(req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.getUserById(userId)
    .then(function (response) {
      console.log(response);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};