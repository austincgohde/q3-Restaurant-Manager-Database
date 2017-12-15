
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(table) {
    table.increments();
    table.string('name');
    table.string('description');
    table.float('price');
    table.integer('course_id')
      .references('id')
      .inTable('courses')
      .onDelete('CASCADE')
      .index();
    table.timestamp('created_at', true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
