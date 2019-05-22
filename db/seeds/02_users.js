
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id_user: 0, name: "AA", email: "AA@gmail.com" },
        { id_user: 1, name: "BB", email: "BB@gmail.com" },
        { id_user: 2, name: "CC", email: "CC@gmail.com" }
      ]);
    });
};
