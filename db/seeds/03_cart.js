
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del().then(function () {
    // Inserts seed entries
    return knex('cart').insert([
      { user_id: 0, total: 200.21, books: "0,1" },
      { user_id: 1, total: 12.21, books: "1,2" }
    ]);
  });
};
//tolgo totale metto costo singolo libro
/*

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 0, name: "AA", email: "AA@gmail.com", creditcard: "1234AA" },
        { id: 1, name: "BB", email: "BB@gmail.com", creditcard: "1234BB" },
        { id: 2, name: "CC", email: "CC@gmail.com", creditcard: "1234CC" }
      ]);
    });
};*/