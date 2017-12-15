const knex = require('../db/knex');

module.exports = {

  getAll: (req, res) => {
    knex('courses')
      .select('')
      .then((result) => {
        let courses = result;
        res.json(courses);
      })

  },

  createNew: (req, res) => {
    knex('courses')
      .insert({
        name: req.body.name
      }, '*')
      .then((result) => {
        let newCourse = result[0];
        res.json(newCourse);
      })
  },

  edit: (req, res) => {
    knex('courses')
      .update({
        name: req.body.name
      }, '*')
      .where('id', req.params.id)
      .then((result) => {
        let edittedCourse = result[0];
        res.json(edittedCourse)
      })
      .catch(err=>console.log(err))
  },

  deleteCourse: (req, res) => {
    knex('courses')
      .del()
      .where('id', req.params.id)
      .then(() => {
        knex('courses')
        .select()
        .then((result) => {
          res.json(result)
        })
      })
  }

}
