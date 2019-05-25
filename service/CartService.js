'use strict';
let db;


exports.cartDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("cart").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbCart Exists");
    }
  });
}

/**
 * Find cart by ID
 * Returns a list of books
 *
 * cartId Long ID of book to return
 * returns List
 **/
exports.getCartById = function (cartId) {
  knex.select()
    .from('cart')
    .where('user_id', cartId)
    .then(function (cart) {
      console.log("Selected ID Cart is: " + cartId);
      console.log(cart);
      return cart;
    })
}


/**
 * Add new book on my cart
 * Login with a form
 *
 * bookID String 
 * no response value expected for this operation
 **/
exports.postCartyID = function (bookID) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}
