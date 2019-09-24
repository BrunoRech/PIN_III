const express = require('express');
const routes = express.Router();

const FavoriteController = require('./FavoriteController');

routes.get('/', FavoriteController.getFavorites);

routes.get('/user/:id', FavoriteController.getFavoriteByUserId);

routes.get('/course/:id', FavoriteController.getFavoriteByCourseId);

routes.post('/', FavoriteController.postFavorite);

routes.delete('/:id', FavoriteController.deleteFavorite);

module.exports = routes;