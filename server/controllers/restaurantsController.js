const db = require("../db");
class restaurantsController {

  async getAllRestaurants(req, res) {
    try {
      const results = await db.query("SELECT * FROM restaurants");
      res.status(200).json({
        status: 200,
        results: results.rowCount,
        success: true,
        message: "successfully featched !!",
        data: results.rows,
      });
    } catch (err) {
      console.error(err.message);
      res.status(406).json({
        status: 406,
        success: true,
        error: err.message,
      });
    }
  }

  async getRestaurantById(req, res) {
    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1",[req.params.id]);
        res.status(200).json({
            status:200,
            success:true,
            results:results.rowCount,
            message:"successfully featched !!",
            data:results.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(406).json({
            status:406,
            success:true,
            error:err.message
        });
    }
  }

  async createNewRestaurants(req, res){
    try {
        
        const results = await db.query("INSERT INTO restaurants (name,location,price_range)VALUES($1,$2,$3)returning *"
        ,[req.body.name,req.body.location,req.body.price_range]) ;
        res.status(202).json({
            status:202,
            success:true,
            results:results.rowCount,
            message:"successfully created !!",
            data:results.rows[0],
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status:500,
            success:true,
            error:err.message
        });
    }
  }
  async updateRestaurants(req,res){
    try {
        const results = await db.query("UPDATE restaurants SET name = $1,location=$2,price_range=$3 WHERE id = $4 RETURNING *" ,
        [req.body.name,req.body.location,req.body.price_range,req.params.id]);
        res.status(202).json({
            status:202,
            success:true,
            results:results.rowCount,
            message:"successfully Updated !!",
            data:results.rows[0],
        });

    } catch (err) {
        console.error(err.message);
        res.status(406).json({
            status:406,
            success:true,
            error:err.message
        });
    }
  }
  
  async deleteRestaurants(req,res){
    try {
        const results = await db.query("DELETE FROM restaurants where id = $1",[req.params.id]);  
        res.status(204).json({
          status:204,
          results:results.rowCount,
          success:true,
          message:"successfully Deleted !!",
          data:results.rows,
        })
      } catch (err) {
          console.error(err.message);
           res.status(406).json({
              status:406,
              success:true,
              error:err.message,
          });
      }
  }
}

module.exports = restaurantsController;
