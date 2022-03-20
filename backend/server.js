const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()


const socketServer=require('./sockerServer');
const authRouter=require('./routes/authRoutes')
const friendsRouter=require('./routes/friendsRoutes')


const PORT=process.env.PORT || process.env.API_PORT;

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/friends',friendsRouter);

const server=http.createServer(app);
socketServer.registerSocketServer(server);

server.listen(PORT,()=>{


});
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`listening on port ${PORT}`);
    })
    .catch(err=>{
        console.log(`Database not found: ${err.message}`);
    })
