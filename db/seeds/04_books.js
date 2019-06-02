
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { isbn: "88-389-1017-0", title: "La forma dell'acqua", theme1: 'Police Procedural', theme2: '-', genre1: 'Crime Novel', genre2: 'Mystery Novel', date: '10-03-1994', recommended: true, price: '6.80', status: 'available', sold: 100 },
        { isbn: '88-389-1226-2', title: 'Il cane di terracotta', theme1: 'Police Procedural', theme2: '-', genre1: 'Crime Novel', genre2: 'Mystery Novel', date: '18-04-1996', recommended: false, price: '6.80', status: 'available', sold: 90 },
        { isbn: '88-7782-702-5', title: 'Harry Potter e la pietra filosofale', theme1: 'Magic', theme2: 'Teenagers', genre1: 'Fantasy Novel', genre2: 'Young Adult Novel', date: '26-06-1997', recommended: false, price: '8.50', status: 'available', sold: 300 },
        { isbn: '88-7782-703-3', title: 'Harry Potter e la camera dei segreti', theme1: 'Magic', theme2: 'Teenagers', genre1: 'Fantasy Novel', genre2: 'Young Adult Novel', date: '02-07-1998', recommended: false, price: '8.50', status: 'available', sold: 270 },
        { isbn: '88-11-58093-5', title: 'Cime Tempestose', theme1: 'Love', theme2: 'Revenge', genre1: 'Tragedy', genre2: 'Gothic Novel', date: '12-1847', recommended: true, price: '5.90', status: 'available', sold: 230},
        { isbn: '978-88-090-3371-9', title: 'Orgoglio e Pregiudizio', theme1: 'Love', theme2: 'Class', genre1: 'Romantic Novel', genre2: 'Historical Fiction', date: '28-01-1813', recommended: true, price: '7.40', status: 'available', sold: 250 },
        { isbn: '978-88-04-51665-1', title: 'Il ritratto di Dorian Gray', theme1: 'Aestheticism', theme2: 'Duplicity', genre1: 'Phylosophical Fiction', genre2: 'Decadent Literature', date: '07-1890', recommended: true, price: '7.90', status: 'available', sold: 280 }
      ]);
    });
};
