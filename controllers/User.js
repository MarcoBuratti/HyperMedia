'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
let cookieSession = require("cookie-session");
let cookieParser = require("cookie-parser");

module.exports.userLoginPOST = function userLoginPOST(req, res, next) {
  var body = req.body;
  User.userLoginPOST(body)
    .then(function (response) {
      let ctrl = JSON.stringify(response);
      let lunghezza = ctrl.length;
      if (lunghezza != 2) {
        console.log(res);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('[{ "status": "prova il login, rete, che gol" }]');
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end('[{ "status": "prova il login, non va" }]');
      }
    });
};

module.exports.userRegisterPOST = function userRegisterPOST(req, res, next) {
  var body = req.body;
  console.log(body);
  User.getUserByEmail(body).then(function (response) {
    console.log(response);
    let ctrl = JSON.stringify(response);
    let lunghezza = ctrl.length;
    if (lunghezza == 2) {
      User.userRegisterPOST(body)
        .then(function () {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end('[{ "status": "eskere" }]');
        })
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('[{ "status": "eskereNo" }]');
    }
  })
};

module.exports.getUserById = function getUserById(req, res, next) {
  var userId = req.swagger.params['userId'].value;
  User.getUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};