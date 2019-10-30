const express = require('express');;

const routes = express.Router();

routes.use('/users', require('./controllers/Users/routes'));
routes.use('/courses', require('./controllers/Courses/routes'));
routes.use('/favorites', require('./controllers/Favorites/routes'));
//routes.use('/search', require('./controllers/Search/routes'));
routes.use('/login', require('./controllers/Login/routes'));
routes.use('/udemy', require('./controllers/Udemy/routes'));
module.exports = routes;