const connectedUsers= new Map();
const {getUserFriendsIds} = require("./controllers/friends/friendsFunctions");
let io = null;

const setSocketServerInstance= (ioInstance)=>{
    io=ioInstance;
};
const getSocketServerInstance=()=>{
    return io;
}

const addUser = ({socketId, userId})=>{
    connectedUsers.set(userId, {socketId});
};
const removeUser = (userId)=>{
    connectedUsers.delete(userId);
};
const getUser = (userId)=>{
    return connectedUsers.get(userId.valueOf());
};
const getOnlineUsers = ()=>{
    let result=[]
    connectedUsers.forEach((value,key)=>{
        result.push(key)
    })
    return result;
};
const newConnectionHandler=async (socket, io)=>{
    const userDetails  = socket.user;
    addUser({
        socketId: socket.id,
        userId: userDetails.userId,
    })

}
const disconnectionHandler=async (socket, io)=>{
    const userDetails  = socket.user;
    removeUser(userDetails.userId)
}
module.exports ={
    connectedUsers,
    newConnectionHandler,
    disconnectionHandler,
    setSocketServerInstance,
    getSocketServerInstance,
    getUser,
    getOnlineUsers
}