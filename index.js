let express = require("express");
let app = express();
let process = require("process");
let bodyparser = require("body-parser");
let _ = require("lodash");
let knex = require("./db/knex");
let myport = 5050 || process.env.PORT;
//other

let myidentifier;
let response;
let { setupDataLayer } = require("./service/DataLayer");
let author = require("./service/AuthorService");

app.use(express.static(__dirname + ""));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set("port", myport);
app.use(express.static(__dirname + '/public'));

//Dato ID ritorno l'evento richiesto all'html
app.get("/event/:id", function (req, res) {
    myidentifier = parseInt(req.params.id);//prende l'id dalla stringa
    knex.select()
        .from('events')
        .where('id', myidentifier)
        .then(function (event) {
            res.status(200);
            res.send(event);
        })
})
//Dato ID ritorna libro richiesto ad HTML
app.get("/book/:id", function (req, res) {
    myidentifier = parseInt(req.params.id);//prende l'id dalla stringa
    knex.select()
        .from('books')
        .where('id', myidentifier)
        .then(function (book) {
            res.status(200);
            res.send(book);
        })
})
//Dato ID ritorna autore richiesto ad HTML
app.get("/author/:id", function (req, res) {
    myidentifier = parseInt(req.params.id);//prende l'id dalla stringa
    knex.select()
    .from('authors')
    .where('id', myidentifier)
    .then(function(author){
        res.status(200);
        res.send(author);
    })
})

//CONTROLLARE LA CLASSE DataLayer
setupDataLayer().then(
    function () {
        app.listen(myport, function () {
            console.log('Your server is listening on port %d: http://localhost:%d', myport, myport);
        })
    }
);

