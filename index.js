//import app
const app = require('./app');

//app listens  
const PORT = process.env.PORT || 3000;
let server;
let IP_ADDRESS = process.env.IP_ADDRESS;
if (IP_ADDRESS) {
    server = app.listen(PORT, IP_ADDRESS, () => {
        console.log(`Listening port ${PORT} of ${IP_ADDRESS} 👠 💪 🤙 🖕 👅`);
    });
} else {
    server = app.listen(PORT, () => {
        console.log(`Listening port ${PORT} 👠 💪 🤙 🖕 👅`);
    });
}



//Listens web sockets for chatt
const chatSockets = require('./chat')(server);