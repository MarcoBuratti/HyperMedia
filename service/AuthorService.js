'use strict';
let db;


exports.authorDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("authors").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbAuthor Exists");
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
exports.getAuthorById = function (authorID) {
   return db.select()
    .from('authors')
    .where('id_author', authorID);
}


exports.getAllAuthors = function () {
  return db.select()
   .from('authors');
}

exports.getBooksByIdAuthor = function (authorID) {
  return db.select('isbn')
   .from('relations').where('id_author',authorID);
}


exports.getAuthorsByIsbn = function (isbn) {
  return db.join('relations','authors.id_author','=','relations.id_author').select('authors.name','authors.id_author')
   .from('authors')
   .where('isbn', isbn);
}