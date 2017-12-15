
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {first_name: 'Austin', last_name: 'Gohde', position: 'Owner', website_access: 3, company_location_id: 1}
      ]);
    });
};
