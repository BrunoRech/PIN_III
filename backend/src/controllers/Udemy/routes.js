const express = require('express');
const routes = express.Router();

const udemyController = require('./UdemyController');

routes.get('/', udemyController.teste);

routes.get('/:id', udemyController.getUserById);

routes.post('/', udemyController.postUser);

routes.put('/:id', udemyController.editUser);

routes.delete('/:id', udemyController.deleteUser);

module.exports = routes;