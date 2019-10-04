const express = require('express');
const routes = express.Router();

const loginController = require('./LoginController');

routes.post('/', loginController.login);
routes.post('/token', loginController.verifyToken);

module.exports = routes;