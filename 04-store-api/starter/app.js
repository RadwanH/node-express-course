require('dotenv').config();

require('express-async-errors');


const express = require('express');
const app = express();
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

// middleware
app.use(express.json());



//routes 
app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Welcome to the store API</h1>
        <a href='/api/v1/products'> Products Route</a>
        
        `)
});

app.use('/api/v1/products', productsRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);





const port = process.env.PORT || 3000;
const start = async () => {

    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
}



start();