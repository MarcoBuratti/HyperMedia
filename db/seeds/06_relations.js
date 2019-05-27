
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relations').del()
    .then(function () {
      // Inserts seed entries
      return knex('relations').insert([
        {id_author: 0, isbn: '0'},
        {id_author: 1, isbn: '1'},
        {id_author: 2, isbn: '2'}
      ]);
    });
};
