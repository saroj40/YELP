import db from "../db/index.js";
import {
  created,
  error,
  getAll,
  getOne,
  updated,
  deleted,
} from "../helper/response.js";

class restaurantsServices {
  constructor() {}

  async getAllRestaurants() {
    try {
      const results = await db.query("SELECT * FROM restaurants");
      return getAll(results);
    } catch (err) {
      return error(err);
    }
  }

  async getRestaurantsById(id) {
    try {
      const tasks = await db.query("SELECT * FROM restaurants WHERE id = $1", [
        id,
      ]);
      return getOne(tasks);
    } catch (err) {
      return error(err);
    }
  }

  async created(request) {
    try {
      const restaurant = await db.query(
        "INSERT INTO restaurants (name,location,price_range)VALUES($1,$2,$3)returning *",
        [request.body.name, request.body.location, request.body.price_range]
      );
      return created(restaurant);
    } catch (err) {
      return error(err);
    }
  }

  async updateRestaurants(request) {
    try {
      const restaurants = await db.query(
        "UPDATE restaurants SET name = $1,location=$2,price_range=$3 WHERE id = $4 RETURNING *",
        [
          request.body.name,
          request.body.location,
          request.body.price_range,
          request.params,
        ]
      );
      return updated(restaurants);
    } catch (err) {
      return error(err);
    }
  }

  async deleteRestaurants(id) {
    try {
      const restaurant = await db.query(
        "DELETE FROM restaurants where id = $1",
        [id]
      );
      return deleted(restaurant);
    } catch (err) {
      return error(err);
    }
  }
}
export default new restaurantsServices();
