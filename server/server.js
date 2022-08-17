// It is the entry point for Backend Application.
// It is responsible for creating and initializing Express App.
// Actually it is starting up and listening up to the port that defined

// dotnev is import at top as it has to start before other thing start
require("dotenv").config();
// middleware morgan 
const morgan = require("morgan");
//importing express
const express = require("express");
// creating the instance of express app
const app = express();
const db =  require('./db');

// express middleware
app.use(morgan("dev"))
app.use(express.json());
const restaurantsController = require('./controllers/restaurantsController')
const restaurants = new restaurantsController();
// get all restaurants
app.get('/api/v1/restaurants',restaurants.getAllRestaurants);
// app.get('/api/v1/restaurants',async(req,res)=>{
//     try {
//         const results = await db.query("SELECT * FROM restaurants");
//         console.log('Get all restaurants',results);
//         res.status(200).json({
//             status:200,
//             results:results.rowCount,
//             success:true,
//             message:"successfully featched !!",
//             data:results.rows,
//         });
//     } catch (err) {
//         console.error(err.message);
//         res.status(406).json({
//             status:406,
//             success:true,
//             error:err.message,
//             data:[],
//         });
//     }
    
   
// });

// get restaurants by id
app.get('/api/v1/restaurants/:id', restaurants.getRestaurantById);

//Create the restaurants
app.post('/api/v1/restaurants',restaurants.createNewRestaurants);


//Update resturants data
app.put('/api/v1/restaurants/:id',restaurants.updateRestaurants);

// Delete resturants Data
app.delete('/api/v1/restaurants/:id', restaurants.deleteRestaurants);

const port = process.env.PORT || 4001;

//Application should listen to the following port
// app.listen(port,callback)
app.listen(port, () => {
  console.log(`Application is up and listening to the port ${port}`);
});
