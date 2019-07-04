const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();

//Third Party Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Middlewares
app.use(require('./middleware/logger'));


//Routers
app.use(require('./router'));



let port = 0;
if (process.env.NODE_ENV === 'PRODUCTION') {
    port = 3000 || process.env.port;
} else {
    port = 5001 || process.env.port;
}

//Listens port
app.listen(port, () => {
    console.log(`Listening port ${port}`);
})