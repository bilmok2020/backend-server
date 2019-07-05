const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Generate express instance
const app = express();
//Connect to database
mongoose.connect('mongodb://localhost:27017/bilmok', {
    useNewUrlParser: true
}).then(
    () => {
        console.log("bağlanmışam")
    },
    err => {
        console.log(`Connection failed. Error: ${err}`);
    }
);

//Third Party Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5500'],
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