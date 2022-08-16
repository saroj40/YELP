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

// get all restaurants
app.get('/api/v1/restaurants',async(req,res)=>{
    try {
        const results = await db.query("SELECT * FROM restaurants");
        console.log('Get all restaurants',results);
        res.status(200).json({
            status:200,
            results:results.rowCount,
            success:true,
            message:"successfully featched !!",
            data:results.rows,
        });
    } catch (err) {
        console.error(err.message);
        res.status(406).json({
            status:406,
            success:true,
            error:err.message,
            data:[],
        });
    }
    
   
});

// get restaurants by id
app.get('/api/v1/resturants/:id', async (req, res)=>{
    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1",[req.params.id]);
        console.log('Get  restaurant by id',results.rows);
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
            error:err.message,
            data:[],
        });
    }
});
//Create the restaurants
app.post('/api/v1/restaurants',async (req, res)=>{
    try {
        
        const results = await db.query("INSERT INTO restaurants (name,location,price_range)VALUES($1,$2,$3)returning *"
        ,[req.body.name,req.body.location,req.body.price_range]) ;
        console.log(results);
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
            error:err.message,
            data:[],
        });
    }
});

//Update resturants data
app.put('/api/v1/resturants/:id',async (req,res)=>{
    try {
        const results = await db.query("UPDATE restaurants SET name = $1,location=$2,price_range=$3 WHERE id = $4 RETURNING *" ,
        [req.body.name,req.body.location,req.body.price_range,req.params.id]);
        console.log("Updated Data",results.rows);
        res.status(202).json({
            status:202,
            success:true,
            results:results.rowCount,
            message:"successfully Updated !!",
            data:results.rows,
        });

    } catch (err) {
        console.error(err.message);
        res.status(406).json({
            status:406,
            success:true,
            error:err.message,
            data:[],
        });
    }
});

// Delete resturants Data
app.delete('/api/v1/resturants/:id',async (req, res)=>{
    try {
      const results = await db.query("DELETE FROM restaurants where id = $1",[req.params.id]);  
      console.log("Data Deleted successfully");
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
            data:[],
        });
    }
});






const port = process.env.PORT || 4001;

//Application should listen to the following port
// app.listen(port,callback)
app.listen(port, () => {
  console.log(`Application is up and listening to the port ${port}`);
});
