'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userLoginPOST = function userLoginPOST(req, res, next) {

  
  let status = { status: false }
  let cookie =req.session.id_user;
  console.log(cookie);

  if (cookie === undefined) {
    console.log("unde");
    req.session = { id_user: "0" };
  }

  if (req.session.id_user != 0) {
    console.log(req.session.id_user);
    console.log("già loggato");
    utils.writeJson(res, status);
  }
  else {


  var body = req.body;
  User.userLoginPOST(body)
    .then(function (response) {
      
      //console.log(response[0].id_user);
      let ctrl = JSON.stringify(response);
      
      let lenght = ctrl.length;
      if (lenght !== 2) {
        req.session.id_user = response[0].id_user;
        status.status = true;
        utils.writeJson(res, status);
      } else {
        utils.writeJson(res, status);
      }
    });
}
};

module.exports.userRegisterPOST = function userRegisterPOST(req, res, next) {

  var body = req.body;
  let status = { status: false }
  let cookie =req.session.id_user;
  console.log(cookie);
  if (cookie === undefined) {
    console.log("unde");
    req.session = { id_user: "0" };
  }

  if (req.session.id_user != 0) {
    console.log(req.session.id_user);
    console.log("già loggato");
    utils.writeJson(res, status);
  }
  else {
    console.log("registra");
    User.getUserByEmail(body).then(function (response) {
      let ctrl = JSON.stringify(response);
      let lenght = ctrl.length;
      if (lenght === 2) {
        User.userRegisterPOST(body)
          .then(function (response2) {
            req.session.id_user = response2;
            status.status = true;
            utils.writeJson(res, status);
          })

      } else {
        utils.writeJson(res, status);
      }
    })
  }
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