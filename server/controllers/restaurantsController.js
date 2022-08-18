import db from "../db/index.js";
import Request from "../helper/request.js";
import { error, getAll } from "../helper/response.js";
import restaurantsServices from "../services/restaurantsServices.js";
class restaurantsController {
  async getAllRestaurants(req, res) {
    const request = Request(req);
    restaurantsServices.getAllRestaurants().then((data) => res.json(data));
  }

  async getRestaurantById(req, res) {
    const request = Request(req);
    restaurantsServices
      .getRestaurantsById(request.params)
      .then((data) => res.json(data));
  }

  async createNewRestaurants(req, res) {
    const request = Request(req);
    restaurantsServices.created(request).then((data) => res.json(data));
  }
  async updateRestaurants(req, res) {
    const request = Request(req);
    restaurantsServices
      .updateRestaurants(request)
      .then((data) => res.json(data));
  }

  async deleteRestaurants(req, res) {
    const request = Request(req);
    restaurantsServices
      .deleteRestaurants(request.params)
      .then((data) => res.json(data));
  }
}
export default new restaurantsController();
