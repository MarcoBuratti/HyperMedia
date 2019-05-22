let sqlDb = require("../db/knex");

let book = require("./BookService");
let author = require('./AuthorService');
let user = require('./UserService');
let event = require('./EventService');
let cart = require('./CartService');

function setupDataLayer() {
  console.log("Check if DataBase table exist");
  return book.booksDbSetup(sqlDb) && author.authorDbSetup(sqlDb) 
    && user.userDbSetup(sqlDb) && event.eventDbSetup(sqlDb) && cart.cartDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };

