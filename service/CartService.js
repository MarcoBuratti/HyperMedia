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


/**
 * Add new book on my cart
 * Login with a form
 *
 * bookID String 
 * no response value expected for this operation
 **/
exports.cartInsertPOST = function (body) {

  console.log(body);
  let id_user = body.id_user;
  let quantity = body.quantity;
  let isbn = body.isbn;
  let total = body.total;
  console.log(id_user);
  db.select("id_user").from("cart").where('id_user',id_user).andWhere('isbn',isbn).then(function(){
    return db2('cart').insert({
      id_user: id_user,
      quantity: quantity,
      isbn: isbn,
      total: total
    })
  });
  return db.select().from('cart');


}


