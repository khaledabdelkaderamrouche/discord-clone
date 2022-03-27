const {
    setSocketServerInstance,
    getSocketServerInstance,
    getUser,
    getOnlineUsers,
    disconnectionHandler,
    newConnectionHandler
} = require("./serverStore");

const authSocket = require('./middleware/authSocket');

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
        newConnectionHandler(socket, io);
        socket.on('disconnect',() => {
            disconnectionHandler(socket);
        })
    });
    setInterval(()=> {
        emitOnlineUsers();
    }, 60000);
};
const emitNewInvitation = (receiverId, sender) =>{

    const io=getSocketServerInstance();
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit('friend-invitation', {
        pendingInvitation:sender
    });

};
const emitOnlineUsers = ()=>{
    const io=getSocketServerInstance();
    const onlineUsers = getOnlineUsers();
    io.emit('online-users', {onlineUsers})
}
const emitAcceptedInvitation = (receiverId, sender) =>{

    const io=getSocketServerInstance();
    const receiver = getUser(receiverId);

    io.to(receiver.socketId).emit('friend-invitation-accepted', {
        friend:sender
    });
};
const emitNewMessage = (receiverId, message) =>{

    const io=getSocketServerInstance();
    const receiver = getUser(receiverId);
    if(receiver)
        io.to(receiver.socketId).emit('new-message', {
            message:message
        });
};
module.exports ={
    registerSocketServer,
    emitNewInvitation,
    emitAcceptedInvitation,
    emitNewMessage
}