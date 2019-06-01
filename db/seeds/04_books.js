
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { isbn: '0', title: 'Book 0', theme1: 'theme1 0', theme2: 'theme2 0', genre1: 'genre1 0', genre2: 'genre2 0', date: '0/0/0000', recommended: true, price: '10.5', status: 'available', sold: 150 },
        { isbn: '1', title: 'Book 1', theme1: 'theme1 1', theme2: 'theme3 1', genre1: 'genre1 1', genre2: 'genre2 1', date: '1/11/1111', recommended: true, price: '10.5', status: 'available', sold: 120 },
        { isbn: '2', title: 'Book 2', theme1: 'theme1 2', theme2: 'theme2 2', genre1: 'genre1 2', genre2: 'genre2 2', date: '2/22/2222', recommended: false, price: '10.5', status: 'available', sold: 30 }
      ]);
    });
};
