'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.booksGET = function booksGET(req, res, next) {
  Book.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBestSeller = function getBestSeller(req, res, next) {
  Book.getBestSeller()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTheme = function getAllTheme(req, res, next) {
  Book.getAllTheme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGenre = function getAllGenre(req, res, next) {
  Book.getAllGenre()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookById = function getBookById(req, res, next) {
  var bookId = req.swagger.params['isbn'].value;
  Book.getBookById(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getBookByGenre = function getBookByGenre(req, res, next) {
  var bookGenre = req.swagger.params['bookGenre'].value;
  Book.getBookByGenre(bookGenre)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookByTheme = function getBookByTheme(req, res, next) {
  var bookTheme = req.swagger.params['bookTheme'].value;
  Book.getBookByTheme(bookTheme)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookRecommended = function getBookRecommended(req, res, next) {
  Book.getBookRecommended()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};