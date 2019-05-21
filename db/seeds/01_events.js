
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 0, name:'Evento 0', presentedBook: 'Libro 0', date:'0/0/0000', subscribers:12},
        {id: 1, name:'Evento 1', presentedBook: 'Libro 1', date:'1/1/1111', subscribers:12},
        {id: 2, name:'Evento 2', presentedBook: 'Libro 2', date:'2/2/2222', subscribers:12}
      ]);
    });
};
//Aggiungere descrizione togliere sub agg immagini, presentedB metterer id libro