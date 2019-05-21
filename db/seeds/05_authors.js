
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        { id: 0, name: 'AA', surname: 'AA' },
        { id: 1, name: 'BB', surname: 'BB' },
        { id: 2, name: 'CC', surname: 'CC' }
      ]);
    });
};

//Tolgo cogbome
//bio
//