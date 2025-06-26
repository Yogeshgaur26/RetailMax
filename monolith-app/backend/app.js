const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./routes/products');

app.use(cors());
app.use(express.json());
app.use('/api/products', products);

module.exports = app;
