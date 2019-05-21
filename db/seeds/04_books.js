
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          id: 0, title: 'Book 0', author: 'AA AA', price: '10.5',
           status: 'available'
        },
        {
          id: 1, title: 'Book 1', author: 'BB BB', price: '11.6', status: 'available'
        },
        {
          id: 2, title: 'Book 2', author: 'CC CC', price: '1', status: 'available'
        }
      ]);
    });
};

//Genere letterario
//Tema 
//data uscita
//ISBN ID
//bool favourite readigs
// autori multipli