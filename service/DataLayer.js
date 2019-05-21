let sqlDb = require("../db/knex");

let { booksDbSetup } = require("./BookService");

function setupDataLayer() {
  return booksDbSetup(sqlDb);
  //IMPORTNTE
  //IMPORTNTE
  //IMPORTNTE
  //IMPORTNTE
  //DA AGGIUNGERE IL CONTOLLO SU TUTTI I SERVICE SE ESISTONO I DATABASE DI RIFERIMENTO
}

module.exports = { database: sqlDb, setupDataLayer };

/*let sqlDb = require("../db/knex.js");

let { booksDbSetup } = require("./BookService");

function setupDataLayer() {
  console.log("Setting up data layer");
  return booksDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };
*/