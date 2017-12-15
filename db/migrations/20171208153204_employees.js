exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('position');
    table.integer('website_access');
    table.integer('company_location_id')
      .references('id')
      .inTable('company_locations')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true)
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
