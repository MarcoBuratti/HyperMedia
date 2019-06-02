
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relations').del()
    .then(function () {
      // Inserts seed entries
      return knex('relations').insert([
        {id_author: 0, isbn: '88-389-1017-0'},
        {id_author: 0, isbn: '88-389-1226-2'},
        {id_author: 1, isbn: '88-7782-702-5'},
        {id_author: 1, isbn: '88-7782-703-3'},
        {id_author: 2, isbn: '88-11-58093-5'},
        {id_author: 3, isbn: '978-88-090-3371-9'},
        {id_author: 4, isbn: '978-88-04-51665-1'}
      ]);
    });
};
