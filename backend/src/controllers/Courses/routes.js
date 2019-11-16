const express = require('express');
const routes = express.Router();

const courseController = require('./CourseController');
const courseSearchController = require('./CouseSearchController');

routes.get('/', courseController.getCourses);

routes.get('/query', courseSearchController.findCourse);

routes.get('/:id', courseController.getCourseById);

routes.post('/', courseController.postCourse);

routes.put('/:id', courseController.editCourse);

routes.delete('/:id', courseController.deleteCourse);

module.exports = routes;