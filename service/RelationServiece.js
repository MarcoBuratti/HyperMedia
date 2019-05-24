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
/**
 * Find author by ID
 * Returns a author
 *
 * authorID Long ID of author to return
 * returns Author
 **/
exports.getRelationById = function (relationID) {
   return db.select()
    .from('relations')
    .where('isbn', relationID);
}

