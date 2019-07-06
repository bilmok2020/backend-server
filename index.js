const cluster = require('cluster');
var server = null;
var workers = null;


//if working process is master process
if (cluster.isMaster) {
    const info = console.info.bind(undefined, '[master #' + process.pid + ']');
    workers = [];
    const os = require('os');
    const coreCount = os.cpus().length;
    info(`Spawning ${coreCount} workers`);
    for (let index = 0; index < 1; index++) {
        workers[index] = cluster.fork();
    }
    let numOfWorkers = coreCount;
    let shutdown = () => {
        info('Shutting Down workers..');
        for (let worker in workers) {
            //Send Workers shutdown signal
            worker.send('shutdown');
            worker.on('exit', () => {
                if (--numOfWorkers <= 0) {
                    info('All workers shutted down');
                    process.exit();
                }
            });
        }

    };
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

} else {
    const info = console.info.bind(undefined, '[worker #' + process.pid + ']');
    const app = require('./app');
    let port = 0;
    if (process.env.NODE_ENV === 'PRODUCTION') {
        port = process.env.port || 3000;
    } else {
        port = process.env.port || 5001;
    }

    //Listen port
    server = app.listen(port, () => {
        console.log(`Listening port ${port}`);
    });

    process.on('message', msg => {
        switch (msg) {
            case 'shutdown':
                server.close(function () {
                    info('Closed all connection');
                    process.exit(0);
                });
                setTimeout(() => {
                    info('Server forced to shutting down');
                    process.exit(1);
                }, 1000);
                break;
            default:
                break;
        }
    });

}