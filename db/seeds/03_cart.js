
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cart').del().then(function () {
    // Inserts seed entries
    return knex('cart').insert([
      { user_id: 0, total: 200.21, quantity: 2, isbn: '0' },
      { user_id: 1, total: 12.21, quantity: 1, isbn: '1' }
    ]);
  });
};
