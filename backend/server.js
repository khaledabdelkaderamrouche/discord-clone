const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()


const authRouter=require('./routes/authRoutes')

const PORT=process.env.PORT || process.env.API_PORT;

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',authRouter);

const server=http.createServer(app);

server.listen(PORT,()=>{


});
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log(`listening on port ${PORT}`);
    })
    .catch(err=>{
        console.log(`Database not found: ${err.message}`);
    })
