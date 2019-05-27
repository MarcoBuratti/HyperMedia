
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id_event: 0, name:'Evento 0', isbn: '0', date:'0/0/0000', description:"Evento 0 presenta libro 0"},
        {id_event: 1, name:'Evento 1', isbn: '1', date:'1/1/1111', description:"Evento 1 presenta libro 1"},
        {id_event: 2, name:'Evento 2', isbn: '2', date:'2/2/2222', description:"Evento 2 presenta libro 2"}
      ]);
    });
};