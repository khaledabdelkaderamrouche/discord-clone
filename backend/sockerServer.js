const registerSocketServer = (server) =>{
    const io = require('socket.io')(server,{
        cors:{
            origin: '*', //TODO change this in prod
            method: ['GET', 'POST'],
        },
    });
    io.on('connection', (socket) => {
        console.log('user connected');
        console.log(socket.id);
        console.log(socket.toString());
    })
};

module.exports ={
    registerSocketServer,
}