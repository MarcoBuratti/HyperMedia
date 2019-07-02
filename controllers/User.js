'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userLoginPOST = function userLoginPOST(req, res, next) {


  let status = { status: false }
  let cookie = req.session.id_user;

  if (cookie === undefined) {

    req.session = { id_user: "0" };
  }
  
  if (req.session.id_user != 0||req.body.email === "" || req.body.password === "" ) {

    utils.writeJson(res, status);
  }
  else {


    var body = req.body;
    User.userLoginPOST(body)
      .then(function (response) {

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
  let cookie = req.session.id_user;

  if (cookie === undefined) {

    req.session = { id_user: "0" };
  }

  if (req.session.id_user != 0||req.body.email === "" || req.body.password === "" || req.body.name === "") {
    utils.writeJson(res, status);
  }
  else {

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

module.exports.getUser = function getUser(req, res, next) {
  let cookie = req.session.id_user;
  if (cookie === undefined || req.session.id_user === 0) {
    utils.writeJson(res, []);
  }

  else {
    User.getUser(req.session.id_user)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  }
};

module.exports.userLogoutPOST = function userLogoutPOST(req, res, next) {
  let status = { status: false }
  let cookie = req.session.id_user;

  if (cookie === undefined) {
    req.session = { id_user: "0" };
  }

  if (req.session.id_user != 0) {

    req.session.id_user = 0;
    status.status = true;
    utils.writeJson(res, status);
  }
  else
    utils.writeJson(res, status);
};