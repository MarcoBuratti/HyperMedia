
exports.up = function (knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        console.log("Create Table Events");
        table.increments('id_event');//.primary();
        table.string('name');//.notNullable();
        table.string('isbn');//.reference('isbn').inTable('relations');
        table.string('date');
        table.text('description');
    })
        .createTable('users', function (table) {
            console.log("Create Table Users");
            table.increments('id_user');//.primary().reference('user_id').inTable('cart').unique();
            table.string('name');//.notNullable();
            table.string('email');//.notNullable();
            table.string('password');
        })
        .createTable('cart', function (table) {
            console.log("Create Table Cart");
            table.integer('user_id');//.references('id_user').inTable('users').unique();
            table.integer('quantity');//.default(0);
            table.float('total');//.default(0);
            table.string('isbn');//.references('isbn').inTable('books').unique();
        })
        .createTable('books', function (table) {
            console.log("Create Table Books");
            table.string('isbn');//.references('isbn').inTable('relations').unique();
            table.string('title');//.notNullable();
            table.string('theme1');
            table.string('theme2');
            table.string('genre1');
            table.string('genre2');
            table.string('date');
            table.boolean('recommended');
            table.float('price');//.notNullable();
            table.enum('status', ['available', 'out of stock']);
            table.integer('sold');
            table.text('descr');
        })
        .createTable('authors', function (table) {
            console.log("Create Table Authors");
            table.increments('id_author');//.references('id_author').inTable('relations').unique();
            table.string('name');//.notNullable();
            table.text('biography');//.notNullable();
        })
        .createTable('relations', function(table) {
            console.log("Create Table Relation");
            table.string('isbn');//.references('isbn').inTable('books').unique();
            table.integer('id_author');//.references('id_author').inTable('authors').unique();
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
