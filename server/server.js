// It is the entry point for Backend Application.
// It is responsible for creating and initializing Express App.
// Actually it is starting up and listening up to the port that defined

// dotnev is import at top as it has to start before other thing start
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import RestaurantsRoute from './routes/restaurants.js';


const app = express();
// express middleware
// app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(express.json());

// Routes Setup
app.use('/api/v1/restaurants',RestaurantsRoute);



const port = process.env.PORT || 4001;
//Application should listen to the following port
// app.listen(port,callback)
app.listen(port, () => {
  console.log(`Application is up and listening to the port ${port}`);
});
