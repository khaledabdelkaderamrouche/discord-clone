const {connectedUsers, setSocketServerInstance, getSocketServerInstance, getUser} = require("./serverStore");

const authSocket = require('./middleware/authSocket')
const {newConnectionHandler, disconnectionHandler} = require("./serverStore");

const registerSocketServer = (server) =>{
    const io = require('socket.io') (server,{
        cors:{
            origin: '*', //TODO change this in prod
            method: ['GET', 'POST'],
        },
    });
    setSocketServerInstance(io);
    io.use((socket,next) => {
        authSocket(socket,next)
    })
    io.on('connection', (socket) => {
        console.log('user connected');
        newConnectionHandler(socket, io)
        console.log("connectedUsers");
        console.log(connectedUsers);
        socket.on('disconnect',() => {
            disconnectionHandler(socket);
        })
    })
};
const emitNewInvitation = (receiverId, sender) =>{

    const io=getSocketServerInstance();
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit('friend-invitation', {
        pendingInvitation:sender
    });

};
const emitAcceptedInvitation = (receiverId, sender) =>{

    const io=getSocketServerInstance();
    const receiver = getUser(receiverId);

    io.to(receiver.socketId).emit('friend-invitation-accepted', {
        friend:sender
    });

};
module.exports ={
    registerSocketServer,
    emitNewInvitation,
    emitAcceptedInvitation

}