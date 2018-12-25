const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb');

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.route('/api/character').get((req, res) => {
    res.send({
        characters: [{name: 'Character A'}, {name: 'Character B'}]
    });
});

app.route('/api/character/:id').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/character/:id').get((req, res) => {
    const id = req.params['id'];
    res.send(200, id);
});

app.route('/api/character/:id').put((req, res) => {
    res.sendStatus(204);
});

app.route('/api/character/:id').delete((req, res) => {
    res.sendStatus(204);
});

app.listen(8000,()=> {
    console.log('Server started');
});
