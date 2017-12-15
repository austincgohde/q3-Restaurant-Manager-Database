exports.up = function(knex, Promise) {
  return knex.schema.createTable('company_locations', function(table) {
    table.increments();
    table.string('property_type');
    table.string('address')
      .unique();
    table.integer('company_id')
      .references('id')
      .inTable('companies')
      .onDelete('CASCADE')
      .index();
    table.timestamp('created_at', true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company_locations');
};
