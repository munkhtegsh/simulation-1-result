require('dotenv').config(); //very top
//can not start node in server !!!!!!!!!!!!!!!!!!!!!! go to top end use it

const express = require('express');
const bodyParser = require('body-parser');
// const cf = './Controller.js';
const massive = require('massive');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
});

app.post('/api/product', (req, res) => {
    let { name, price, url } = req.body;
    app.get('db').create_product([2,name, price, url]).then((response) => {
        res.status(200).send(response)
    });
})

app.get('/api/inventory', (req, res) => {
    app.get('db').get_inventory().then((response) => {
    	res.status(200).send(response);
    })
})

app.delete('/api/inventory/:id', (req, res) => {
    let { id } = req.body;
    app.get('db').delete_product(id).then((response) => {
    	res.status(200).send(response);
    })
})


app.listen(PORT, () => {
    console.log(`Magic is in port: ${PORT}`)
})

