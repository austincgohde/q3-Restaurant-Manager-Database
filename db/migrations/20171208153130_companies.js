exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', function(table) {
    table.increments();
    table.string('name');
    table.string('owner');
    table.timestamp('created_at', true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
