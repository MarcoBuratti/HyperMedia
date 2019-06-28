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


exports.userLoginPOST = function (body) {
  let nameIns = body.name;
  let emailIns = body.email;
  let passwordIns = body.password;
  return db.select('id_user').from('users').where('name', nameIns).andWhere('email', emailIns).andWhere('password', passwordIns);
}


exports.userRegisterPOST = function (body) {

  let nameIns = body.name;
  let emailIns = body.email;
  let pswIns = body.password;
  let id = db.max("id_user").from("users").then(data => {
    let id = data[0].max;
    id = id + 1;
    db('users').insert({
      id_user: id,
      name: nameIns,
      email: emailIns,
      password: pswIns
    }).then(function(){return true;})
    return id;
  });
  return id;
}

exports.getUserByEmail = function (body) {
  let emailIns = body.email;
  let nameIns = body.name;
  return db.select('email').from('users').where('email', emailIns).andWhere('name', nameIns);
}


exports.getUser = function (userID) {
  return db.select('name')
    .from('users')
    .where('id_user', userID);
}


