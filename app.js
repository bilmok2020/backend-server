const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Generate express instance
const app = express();
//Connect to database
var uri = 'mongodb+srv://Tebaks:mongokenan@bilmok-cpeer.mongodb.net/bilmok';

var db = mongoose.connect(uri).catch((error) => { console.log(error); });




//Third Party Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5500', 'http://localhost:8080'],
    methods: ['GET', 'POST', 'UPDATE'],
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Middlewares
app.use(require('./middleware/logger'));


//Routers
app.use(require('./router'));



module.exports = app;