const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Generate express instance
const app = express();
//Connect to database
let uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bilmok-cpeer.mongodb.net/bilmok`;
mongoose.connect(uri)
    .then(() => console.log('Connected to database correctly 😋'))
    .catch((error) => {
        console.log(error);
    });

//Third Party Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', `http://${process.env.IP_ADDRESS}:8080`, `https://${process.env.IP_ADDRESS}:8080`],
    methods: ['GET', 'POST', 'UPDATE'],
}));
app.use(bodyParser.json());

//Middlewares
app.use(require('./middleware/logger'));


//Routers
app.use(require('./router'));

module.exports = app;