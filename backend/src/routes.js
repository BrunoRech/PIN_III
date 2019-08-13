const express = require('express');
const routes = express.Router();

//controllers
const userController = require('./controllers/UserController');

//retorna todos
routes.get('/users', userController.getUsers);
//retorna um pelo id
routes.get('/users/:id', userController.getUserById);
//cria um novo usuário e salva no banco
routes.post('/users', userController.postUser);
//edita um usuário ja existente
routes.put('/users/:id', userController.editUser);
//deleta o usuário
routes.delete('/users/:id', userController.deleteUser);

module.exports = routes;