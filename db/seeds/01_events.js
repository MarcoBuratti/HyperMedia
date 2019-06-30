
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id_event: 0, name:'The Golden One', isbn: '0-330-49286-1', date: '10/07/2019', description: "Twentyfive years after the publication of ''The Shape of Water'' by Andrea Camilleri, "},
        {id_event: 1, name:'Montalbano sono', isbn: '0-330-49286-1', date: '15/08/2019', description: "Evento 1 presenta libro 1"},
        {id_event: 2, name:'After all this time? Always.', isbn: '0-684-19723-7', date: '13/07/2019', description: ""},
        {id_event: 3, name:"It's me, Kate, I've come home", isbn: '0-358-31746-2', date: '13/10/2019', description: "Evento 2 presenta libro 2"},
        {id_event: 4, name:"Tiny Pretty Books", isbn: '0-358-31746-2', date: '28/09/2019', description: ""}
      ]);
    });
};