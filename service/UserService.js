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
  let passwordIns = body.password;
  return db.select('id_user').from('users').where('name', nameIns).andWhere('password',passwordIns);
}


exports.userRegisterPOST = function (body) {
  let nameIns = body.name;
  let emailIns = body.email;
  let pswIns = body.password;
  db.max("id_user").from("users").then(data => {
    let id = data[0].max;
    id = id + 1;
    return db2('users').insert({
      id_user: id,
      name: nameIns,
      email: emailIns,
      password: pswIns
    })
  });
  return db.select().from('users').where('email', emailIns);
}

exports.getUserByEmail = function (body) {
  let emailIns = body.email;
  let nameIns = body.name;
  return db.select('email').from('users').where('email', emailIns).andWhere('name',nameIns);
}


exports.getUserById = function (userID) {
  return db.select()
    .from('users')
    .where('id_user', userID);
}


