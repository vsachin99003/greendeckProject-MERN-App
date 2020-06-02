const express = require('express');
const connectDB = require('./db/db');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json())
const productRouter = require('./routes/products');
const priceRouter = require('./routes/prices');
const similarRouter = require('./routes/similarprod');
const stockRouter = require('./routes/stocks');

connectDB();
app.use(express.json({ extended: false }));
const Port = process.env.Port || 4000;

app.use('/products',productRouter)
app.use('/prices',priceRouter)
app.use('/similar',similarRouter)
app.use('/stock',stockRouter)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('../build'))
}

app.listen(Port, () => console.log('Server started'));

