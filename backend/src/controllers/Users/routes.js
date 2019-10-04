const express = require('express');
const routes = express.Router();

const userController = require('./UserController');

routes.get('/', userController.getUsers);

routes.get('/:id', userController.getUserById);

routes.post('/', userController.postUser);

routes.put('/:id', userController.editUser);

routes.delete('/:id', userController.deleteUser);

module.exports = routes;