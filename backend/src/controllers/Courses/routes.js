const express = require('express');
const routes = express.Router();

const courseController = require('./CourseController');


routes.get('/', courseController.getCourses);

routes.get('/:id', courseController.getCourseById);

routes.post('/', courseController.postCourse);

routes.put('/:id', courseController.editCourse);

routes.delete('/:id', courseController.deleteCourse);

module.exports = routes;