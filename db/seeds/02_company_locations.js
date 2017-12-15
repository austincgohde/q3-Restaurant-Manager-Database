
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('company_locations').insert([
        {property_type: 'building', address: '1337 Food Dr, 80000, Phoenix, AZ', company_id: 1}
      ]);
    });
};
