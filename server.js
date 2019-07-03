const express = require('express');
const app = expres();

//Third Party Middlewares

//Middlewares
app.use(require('./middleware/logger'));


//Routers
app.use(require('./router'));



const port;
if (process.env.NODE_ENV === 'PRODUCTION') {
    port = 3000 || process.env.port;
} else {
    port = 5001 || process.env.port;
}

//Listens port
app.listen(port, () => {
    console.log(`Listening port ${port}`);
})