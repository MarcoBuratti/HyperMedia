'use strict';

let db;


exports.userDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("users").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbUsers Exists");
    }
  });
}


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
  return db.select()
    .from('authors')
    .where('id_user', userID);
}


