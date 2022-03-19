const {addNewUser,connectedUsers} = require("./serverStore");

const authSocket = require('./middleware/authSocket')
const {newConnectionHandler, disconnectionHandler} = require("./serverStore");

const registerSocketServer = (server) =>{
    const io = require('socket.io') (server,{
        cors:{
            origin: '*', //TODO change this in prod
            method: ['GET', 'POST'],
        },
    });
    io.use((socket,next) => {
        authSocket(socket,next)
    })
    io.on('connection', (socket) => {
        console.log('user connected');
        newConnectionHandler(socket, io)
        console.log(connectedUsers);
        socket.on('disconnect',() => {
            disconnectionHandler(socket);
        })
    })
};

module.exports ={
    registerSocketServer,
}