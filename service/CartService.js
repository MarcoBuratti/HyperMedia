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

exports.getCartById = function (userId) {
  return db.join('books','books.isbn','=','cart.isbn').select('quantity', 'total', 'title', 'books.isbn')
    .from('cart')
    .where('user_id', userId);
    
}

exports.getCartByIdAndIsbn = function (body,id_user) {
  
  let isbn = body.isbn;
  return db.select()
    .from('cart')
    .where('user_id', id_user).andWhere('isbn',isbn);
    
}


exports.cartInsertPOST = function (body,id_user) {

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


exports.cartUpdate = function (body,id_user) {

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
  console.log(userId+"DSDs"+isbn);
  return db('cart').where('user_id', userId).andWhere('isbn',isbn).del();
    
}