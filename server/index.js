const express = require('express');
const ctrl = require('./controller')
const app = express();
const port = 4001

app.get('/api/products', ctrl.getProducts)
app.get('/api/products/:id', ctrl.getItem)



app.listen(port, () => console.log(`listening on port ${port}`))