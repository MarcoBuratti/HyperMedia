
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id_user: 1, name: "AA", email: "AA@gmail.com", password: "passwdAA" },
        { id_user: 2, name: "BB", email: "BB@gmail.com", password: "passwdBB" },
        { id_user: 3, name: "CC", email: "CC@gmail.com", password: "passwdCC" }
      ]);
    });
};
