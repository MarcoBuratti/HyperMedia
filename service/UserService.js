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
exports.userRegisterPOST = function (body) {
  let nameIns = body.name;
  let emailIns = body.email;
  let pswIns = body.password;
  console.log(nameIns);

  db.max("id_user").from("users").then( data => {
    let id= JSON.parse(data);
    console.log(data);
    console.log(id.max);
  }
  );

  return db('users').insert({
    id_user: 22,
    name: nameIns,
    email: emailIns,
    password: pswIns
  });
}


exports.getUserById = function (userID) {
  return db.select()
    .from('users')
    .where('id_user', userID);
}


