const express = require('express');
const db = require('./models');
const Ingatlan = db.Ingatlan;
const Kategoria = db.Kategoria;
const bodyParser = require('body-parser');

const routes = express.Router();
express().use(bodyParser.json());

routes.get('/ingatlan', (req, res) => {
    Ingatlan.findAll({include: Kategoria})
        .then(data => {
            res.send(data).status(200);
        })
});

routes.post('/ingatlan', (req, res) => {
    
})

module.exports = routes;