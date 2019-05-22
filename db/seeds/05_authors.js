
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        { id_author: 0, name: 'AA', biography: 'AA nasce ad AA e muore ad AA' },
        { id_author: 1, name: 'BB', biography: 'BB nasce a BB e muore a BB' },
        { id_author: 2, name: 'CC', biography: 'CC nasce a CC e muore a CC' }
      ]);
    });
};

//Tolgo cogbome
//bio
//