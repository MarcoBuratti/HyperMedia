
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        { isbn: "0-330-49286-1", title: "The Shape of Water", theme1: 'Police Procedural', theme2: '-', genre1: 'Crime Novel', genre2: 'Mystery Novel', date: '10-03-1994', recommended: true, price: '6.80', status: 'available', sold: 100 },
        { isbn: '0-330-49291-8', title: 'The Terracotta Dog', theme1: 'Police Procedural', theme2: '-', genre1: 'Crime Novel', genre2: 'Mystery Novel', date: '18-04-1996', recommended: false, price: '6.80', status: 'available', sold: 90 },
        { isbn: '0-7475-3269-9', title: "Harry Potter and the Philosopher's Stone", theme1: 'Magic', theme2: 'Teenagers', genre1: 'Fantasy Novel', genre2: 'Young Adult Novel', date: '26-06-1997', recommended: false, price: '8.50', status: 'available', sold: 300 },
        { isbn: '0-7475-3849-2', title: 'Harry Potter and the Chamber of Secrets', theme1: 'Magic', theme2: 'Teenagers', genre1: 'Fantasy Novel', genre2: 'Young Adult Novel', date: '02-07-1998', recommended: false, price: '8.50', status: 'available', sold: 270 },
        { isbn: '0-486-29256-8', title: 'Wuthering Heights', theme1: 'Love', theme2: 'Revenge', genre1: 'Tragedy', genre2: 'Gothic Novel', date: '12-1847', recommended: true, price: '5.90', status: 'available', sold: 230},
        { isbn: '0-358-31746-2', title: 'Pride and Prejudice', theme1: 'Love', theme2: 'Class', genre1: 'Romantic Novel', genre2: 'Historical Fiction', date: '28-01-1813', recommended: true, price: '7.40', status: 'available', sold: 250 },
        { isbn: '0-684-19723-7', title: 'The Picture of Dorian Gray', theme1: 'Aestheticism', theme2: 'Duplicity', genre1: 'Phylosophical Fiction', genre2: 'Decadent Literature', date: '07-1890', recommended: true, price: '7.90', status: 'available', sold: 280 },
        { isbn: '0-9123-2134-2', title: 'Tiny Pretty Things', theme1: 'Discrimination', theme2: 'Mystery', genre1: 'Young Adult Novel', genre2: 'Contemporary', date: '26-05-2015', recommended: false, price: '9.90', status: 'available', sold: 100 }
      ]);
    });
};
