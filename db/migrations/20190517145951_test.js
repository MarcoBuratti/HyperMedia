
exports.up = function (knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        console.log("Create Table Events");
        table.increments('id');
        table.string('name');//.notNullable();
        table.string('presentedBook');
        table.string('date');
        table.integer('subscribers')//.notNullable().defaultTo(0);
    })
        .createTable('users', function (table) {
            console.log("Create Table Users");
            table.increments('id');
            table.string('name');//.notNullable();
            table.string('email');//.notNullable();
            table.string('creditcard');
        })
        .createTable('cart', function (table) {
            console.log("Create Table Cart");
            table.integer('user_id')//.references('id').inTable('users').unique();
            table.float('total');
            table.string('books');
        })
        .createTable('books', function (table) {
            console.log("Create Table Books");
            table.increments('id');
            table.string('title');//.notNullable();
            table.string('author')//.references('id').inTable('authors').unique();
            table.float('price');//.notNullable();
            table.enum('status', ['available', 'out of stock']);
        })
        .createTable('authors', function (table) {
            console.log("Create Table Authors");
            table.increments('id');
            table.string('name');//.notNullable();
            table.string('surname');//.notNullable();
        })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('events')
        .dropTable('users')
        .dropTable('cart')
        .dropTable('books')
        .dropTable('authors');
};
