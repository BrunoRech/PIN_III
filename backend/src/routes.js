const express = require('express');
const routes = express.Router();

//controllers
const userController = require('./controllers/UserController');
const loginController = require('./controllers/LoginController');

//retorna todos
routes.get('/users', userController.getUsers);
//retorna um pelo id
routes.get('/users/:id', userController.getUserById);
//cria um novo usuário e salva no banco
routes.post('/users', userController.postUser);
//edita um usuário ja existente
routes.put('/users/:id', userController.editUser);
//deleta o usuário
routes.delete('/users/delete/:id', userController.deleteUser);

routes.post('/login', loginController.login);
routes.post('/teste', loginController.teste);
module.exports = routes;