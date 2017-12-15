const courses = require('../controllers/courses');
const dishes = require('../controllers/dishes');

module.exports = (app) => {

  app.get('/courses', courses.getAll);

  app.post('/courses/add', courses.createNew);

  app.put('/courses/edit/:id', courses.edit);

  app.delete('/courses/delete/:id', courses.deleteCourse);

  app.get('/dishes', dishes.getAll);

  app.post('/dishes/add', dishes.createNew)

};
