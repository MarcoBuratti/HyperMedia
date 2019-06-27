'use strict';
let db;


exports.relationDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("relations").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbRelations Exists");
    }
  });
}

