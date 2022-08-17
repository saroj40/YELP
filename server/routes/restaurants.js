const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');
const restaurants = new restaurantsController();

        router.route('/')
        .get(restaurants.getAllRestaurants)
        .post(restaurants.createNewRestaurants);

        router.route('/:id')
        .get( restaurants.getRestaurantById)
        .put(restaurants.updateRestaurants)
        .delete( restaurants.deleteRestaurants);

module.exports = router;

