'use strict';

let db;

exports.booksDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbBook Exists");
    }
  });
}
/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function () {
  return db.select('isbn', 'title', 'price')
    .from('books');
}

exports.getBestSeller = function () {
  return db.select('isbn')
    .from('books')
    .orderBy('sold', 'desc')
    .limit(3);
}

exports.getAllTheme = function () {
  return db.distinct('theme1').from('books').union( function(){
    this.distinct('theme2').from('books')
  })
}

exports.getAllGenre = function () {
  return db.distinct('genre1').from('books').union( function(){
    this.distinct('genre2').from('books')
  })
}

/**
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function (bookId) {
  return db.join('relations', 'relations.isbn', '=', 'books.isbn').join('authors', 'authors.id_author', '=', 'relations.id_author')
    .select('relations.isbn', 'title', 'theme1', 'theme2', 'genre1', 'genre2', 'date', 'recommended', 'price', 'status', 'name')
    .from('books')
    .where('relations.isbn', bookId);
}

exports.getBookByName = function (bookName) {
  bookName = '%' + bookName + '%';
  return db.select('isbn')
    .from('books')
    .where('title', 'like', bookName);
}

exports.getBookByGenre = function (bookGenre) {
  return db.select('isbn')
    .from('books')
    .where('genre1', bookGenre)
    .orWhere('genre2', bookGenre);
}

exports.getBookByTheme = function (bookTheme) {
  return db.select('isbn')
    .from('books')
    .where('theme1', bookTheme)
    .orWhere('theme2', bookTheme);
}

exports.getBookRecommended = function (bookRecomm) {
  return db.select('isbn')
    .from('books')
    .where('recommended', bookRecomm);
}