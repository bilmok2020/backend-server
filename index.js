const app = require('./app');

let port = 0;
if (process.env.NODE_ENV === 'PRODUCTION') {
    port = process.env.port || 3000;
} else {
    port = process.env.port || 5001;
}

//Listens port
app.listen(port, () => {
    console.log(`Listening port ${port}`);
})