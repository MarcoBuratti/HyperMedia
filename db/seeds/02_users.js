
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 0, name: "AA", email: "AA@gmail.com", creditcard: "1234AA" },
        { id: 1, name: "BB", email: "BB@gmail.com", creditcard: "1234BB" },
        { id: 2, name: "CC", email: "CC@gmail.com", creditcard: "1234CC" }
      ]);
    });
};
