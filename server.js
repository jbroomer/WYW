const express = require('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser'); 

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
app.listen(3000, function () {
    console.log('App started on port 3000');
});