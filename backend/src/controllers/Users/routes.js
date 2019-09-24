const express = require('express');
const routes = express.Router();

const userController = require('./UserController');

//retorna todos
routes.get('/', userController.getUsers);
//retorna um pelo id
routes.get('/:id', userController.getUserById);
//cria um novo usuário e salva no banco
routes.post('/', userController.postUser);
//edita um usuário ja existente
routes.put('/:id', userController.editUser);
//deleta o usuário
routes.delete('/:id', userController.deleteUser);

module.exports = routes;