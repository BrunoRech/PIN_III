const express = require('express');
const routes = express.Router();

const loginController = require('./controllers/Login/LoginController');

routes.use('/users', require('./controllers/Users/routes'));
routes.use('/courses', require('./controllers/Courses/routes'));
routes.use('/favorites', require('./controllers/Favorites/routes'));
//routes.use('/search', require('./controllers/Search/routes'));

routes.post('/login', loginController.login);
routes.post('/teste', loginController.teste);
module.exports = routes;