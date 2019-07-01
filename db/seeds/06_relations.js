
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relations').del()
    .then(function () {
      // Inserts seed entries
      return knex('relations').insert([
        {id_author: 0, isbn: '0-330-49286-1'},
        {id_author: 0, isbn: '0-330-49291-8'},
        {id_author: 0, isbn: '0-399-15577-7'},
        {id_author: 0, isbn: '0-389-15747-1'},
        {id_author: 1, isbn: '0-7475-3269-9'},
        {id_author: 1, isbn: '0-7475-3849-2'},
        {id_author: 2, isbn: '0-486-29256-8'},
        {id_author: 3, isbn: '0-358-31746-2'},
        {id_author: 3, isbn: '0-358-31855-7'},
        {id_author: 4, isbn: '0-684-19723-7'},
        {id_author: 5, isbn: '0-9123-2134-2'},
        {id_author: 6, isbn: '0-9123-2134-2'}
      ]);
    });
};
