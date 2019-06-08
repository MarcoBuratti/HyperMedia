
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id_event: 0, name:'The Golden One', isbn: '0-330-49286-1', date: '10/03/2019', description: "Twentyfive years after the publication of ''The Shape of Water'' by Andrea Camilleri, "},
        {id_event: 1, name:'Montalbano sono', isbn: '0-330-49286-1', date: '1/1/1111', description: "Evento 1 presenta libro 1"},
        {id_event: 2, name:'After all this time? Always.', isbn: '', date: '', description: ""},
        {id_event: 3, name:"It's me, Kate, I've come home", isbn: '2', date: '2/2/2222', description: "Evento 2 presenta libro 2"},
        {id_event: 4, name:"Tiny Pretty Books", isbn: '', date: '', description: ""}
      ]);
    });
};