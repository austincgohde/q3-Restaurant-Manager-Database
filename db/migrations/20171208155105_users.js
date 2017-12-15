exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.integer('employee_id')
      .references('id')
      .inTable('employees')
      .onDelete('CASCADE')
      .index();
    table.string('email');
    table.string('password');
    table.timestamp('created_at', true)
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
