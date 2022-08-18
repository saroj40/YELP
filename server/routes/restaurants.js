import express from 'express';
const RestaurantsRoute = express.Router();
import restaurantsController from '../controllers/restaurantsController.js';

        RestaurantsRoute.route('/')
        .get(restaurantsController.getAllRestaurants)
        .post(restaurantsController.createNewRestaurants);

        RestaurantsRoute.route('/:id')
        .get( restaurantsController.getRestaurantById)
        .put(restaurantsController.updateRestaurants)
        .delete( restaurantsController.deleteRestaurants);

export default RestaurantsRoute;
