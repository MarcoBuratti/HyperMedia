'use strict';

let db;
let db2;


exports.userDbSetup = function (database) {
  db = database;
  db2 = database;
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
exports.userRegisterPOST = function (body) {
  let nameIns = body.name;
  let emailIns = body.email;
  let pswIns = body.password;
  db.max("id_user").from("users").then(data => {
    let id = data[0].max;
    id = id + 1;
    console.log(data[0].max);
    console.log(id);
    return db2('users').insert({
      id_user: id,
      name: nameIns,
      email: emailIns,
      password: pswIns
    })
  });
  return db.select().from('users');
}

exports.getUserById = function (userID) {
  return db.select()
    .from('users')
    .where('id_user', userID);
}


