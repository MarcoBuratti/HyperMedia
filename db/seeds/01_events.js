
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id_event: 0, name:'The Golden One', isbn: '0-330-49286-1', date: '10/07/2019', description: "Twentyfive years after the publication of ''The Shape of Water'' by Andrea Camilleri, a revised version of the book will be presented by the author, who will be happy to sign all the sold copies inside our shop in Milan. This version will be a limited edition and will be characterized by a golden cover."},
        {id_event: 1, name:'Montalbano sono', isbn: '0-330-49286-1', date: '15/08/2019', description: "Always been a fan of Montalbano (both the books and the tv serie)? Come to our shop to meet famous actor Luca Zingaretti, who interprets Commissario Montalbano in the popular tv show."},
        {id_event: 2, name:'After all this time? Always.', isbn: '0-684-19723-7', date: '13/07/2019', description: "More than three years after the passing of the beloved actor Alan Rickman (Severus Snape in the Harry Potter movies), three of the main actors of the show will hold a conference in our conference room to talk about how working with Alan on the film set was."},
        {id_event: 3, name:"It's me, Kate, I've come home", isbn: '0-358-31746-2', date: '13/10/2019', description: "When talking about Wuthering Heights, you never know if you're referring to the book or to the Kate Bush's song. But hey, you're talking about a masterpiece in both cases! Come to our conference room and you will have the pleasure to listen to Kate singing live!"},
        {id_event: 4, name:"Tiny Pretty Books", isbn: '0-358-31746-2', date: '28/09/2019', description: "Oh God! Did you hear that? We're all going back to the ballet school, in the fabulous world of Tiny Pretty Things! And what better way to prepare for that if not by coming to the presentation of the new book " + '"Shiny Broken Pieces"?'}
      ]);
    });
};