const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHAndlerMiddleware = require('./middleware/error-handler');


const port = process.env.PORT || 3000;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHAndlerMiddleware);
 






const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`listening on port ${port} `);
        });
    }catch(err){
        console.error(err);

    };
}


start();



