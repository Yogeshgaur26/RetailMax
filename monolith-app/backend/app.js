const express = require('express');
const cors = require('cors');
const client = require('prom-client');
const app = express();
const products = require('./routes/products');

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const buttonClicks = new client.Counter({
    name: 'button_clicks_total',
    help: 'Total number of product button clicks',
  });
  

app.use(cors());
app.use(express.json());
app.use('/api/products', products);

app.post('/api/click', (req, res) => {
    buttonClicks.inc(); // increment by 1
    res.status(200).json({ message: 'Click counted' });
  });

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  });

module.exports = app;
