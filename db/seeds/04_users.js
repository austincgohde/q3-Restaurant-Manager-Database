const encryption = require('../../config/encryption');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const user = {
        employee_id: 1,
        email: 'aus@tin.io',
        password: 'admin'
      }
      // Inserts seed entries
      encryption.hash(user)
        .then((ecryptedUser) => {
          return knex('users').insert([encryptedUser]);
        })
    });
};
