'use strict';

const knex = require('../db/knex');
/**
 * Login
 * Login with a form
 *
 * username String 
 * password String 
 * returns List
 **/
exports.userLoginPOST = function (username, password) {
  return new Promise(function (resolve, reject) {
    var examples = {};
  
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register
 * Register into the store
 *
 * username String 
 * password String 
 * no response value expected for this operation
 **/
exports.userRegisterPOST = function (username, password) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


exports.getUserById = function (userID) {
  knex.select()
    .from('authors')
    .where('id', userID)
    .then(function (user) {
      console.log("Selected ID User is: " + userID);
      console.log(user);
      return user;
    })
}


