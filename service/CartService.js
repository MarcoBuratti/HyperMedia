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
exports.getCartById = function (userId) {
  return db.select()
    .from('cart')
    .where('user_id', userId);
    
}

exports.getAll = function () {
  return db.select()
    .from('cart');
    
}
exports.getCartByIdAndIsbn = function (body) {
  let id_user = body.user_id;
  let isbn = body.isbn;
  return db.select()
    .from('cart')
    .where('user_id', id_user).andWhere('isbn',isbn);
    
}



/**
 * Add new book on my cart
 * Login with a form
 *
 * bookID String 
 * no response value expected for this operation
 **/
exports.cartInsertPOST = function (body) {

  let id_user = body.user_id;
  let quantity = body.quantity;
  let isbn = body.isbn;
  let total = body.total;
  return db('cart').insert({
      user_id: id_user,
      quantity: quantity,
      isbn: isbn,
      total: total
    })
}


exports.cartUpdate = function (body) {

  let id_user = body.user_id;
  let quantity = body.quantity;
  let isbn = body.isbn;
  let total = body.total;
  return db('cart').where('user_id',id_user).andWhere('isbn',isbn).update({
    quantity: quantity,
    total: total
  });
}

exports.deleteCart = function (userId) {
  return db('cart').where('user_id', userId).del();
    
}

exports.deleteBook = function (userId,isbn) {
  return db('cart').where('user_id', userId).andWhere('isbn',isbn).del();
    
}