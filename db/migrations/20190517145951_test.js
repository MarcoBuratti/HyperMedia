
exports.up = function (knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        console.log("Create Table Events");
        table.increments('id_event');
        table.string('name');//.notNullable();
        table.string('isbn');
        table.string('date');
        table.string('description')//.notNullable().defaultTo(0);
    })
        .createTable('users', function (table) {
            console.log("Create Table Users");
            table.increments('id_user');//.reference('id_user').inTable('cart');
            table.string('name');//.notNullable();
            table.string('email');//.notNullable();
        })
        .createTable('cart', function (table) {
            console.log("Create Table Cart");
            table.integer('user_id');//.references('id').inTable('users').unique();
            table.integer('quantity');//.default(0);
            table.float('total');//.default(0);
            table.string('isbn');//.references('isbn').inTable('books').unique();
        })
        .createTable('books', function (table) {
            console.log("Create Table Books");
            table.string('isbn');
            table.string('title');//.notNullable();
            table.string('theme1');
            table.string('theme2');
            table.string('genre1');
            table.string('genre2');
            table.string('date');
            table.boolean('recommended');
            table.float('price');//.notNullable();
            table.enum('status', ['available', 'out of stock']);
        })
        .createTable('authors', function (table) {
            console.log("Create Table Authors");
            table.increments('id_author');
            table.string('name');//.notNullable();
            table.string('biography');//.notNullable();
        })
        .createTable('relations', function(table) {
            console.log("Create Table Relation");
            table.string('isbn');
            table.integer('id_author');
        });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('events')
        .dropTable('users')
        .dropTable('cart')
        .dropTable('books')
        .dropTable('authors')
        .dropTable('relations');
};
