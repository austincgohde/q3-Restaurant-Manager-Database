const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('dishes')
      .select()
      .then((result) => {
        res.json(result)
      })
  },

  createNew: (req, res) => {
    knex('dishes')
      .insert({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        course_id: req.body.course_id
      }, '*')
      .then((result) => {
        res.json(result[0])
      })
  }

};
