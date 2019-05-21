'use strict';
const knex = require('../db/knex');
const prova = require('../index');
/**
 * Find author by ID
 * Returns a author
 *
 * authorID Long ID of author to return
 * returns Author
 **/
exports.getAuthorById = function (authorID) {
  /*
  let response = await fetch('../v2/authors/'+ authorID);
  let json = await response.json();
  console.log(json)
  return json;
  */
  knex.select()
    .from('authors')
    .where('id', authorID)
    .then(function (author) {
      console.log("Selected ID Authors is: " + authorID);
      console.log(author);
      prova.setResponse(author).json();
    })

}

